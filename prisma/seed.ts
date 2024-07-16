import { db } from "@/server/db";
import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";


const users = Array.from({ length: 10 }, () => {
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const password = faker.internet.password()

    return { name, email, password };
})



async function seed(users: {
    name: string, email: string, password: string
}[]) {
    try {
        await db.user.createMany({
            data: users, skipDuplicates: true
        })

        const userIds = await db.user.findMany({
            select: {
                id: true
            }
        })

        const seedCategories = Array.from({ length: 100 }, () => {
            const name = faker.commerce.department();
            const isOfUserInterest = true
            const interestedUserId = userIds[Math.floor(Math.random() * userIds.length)]?.id as number;
            return { name, isOfUserInterest, interestedUserId }
        })

        await db.category.createMany({
            data: seedCategories, skipDuplicates: true
        })
    } catch (error) {
        console.error(error)
        process.exit(1)
    } finally {
        db.$disconnect()
    }

}
seed(users);