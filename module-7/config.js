import dotenv from 'dotenv'

dotenv.config()

export const DATABASE_PASSWORD=process.env.DATABASE_PASSWORD

tailwindcss.config = {
    theme: {
        extend: {
            colors: {
                my_teal: '#008080',
                pale_orange: '#ffdd9a6',
                light_orange: '#fbb03b',
                orange: '#f7931e',
                greyish_light_red: '#D5C4C4'

            }
        }
    }
}

