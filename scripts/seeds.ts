const { PrismaClient } = require("@prisma/client")

const db = new PrismaClient()

async function main() {
    try {
        await db.category.createMany({
            data: [
                {name: "Famouns People"},
                {name: "Movies & TV"},
                {name: "Musician"},
                {name: "Games"},
                {name: "Scientist"},
                {name: "Student"},
                {name: "Teacher"},
                {name: "Philosophy"},
                {name: "Others"},
            ]
        })
    } catch (error) {
        console.log("Error Seeding DEfault Categories.(scripts folder)", error)
    } finally {
        await db.$disconnect()
    }
}

main()