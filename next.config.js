/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        "BASE_URL": "http://localhost:3000",
        "MONGODB_URL": "mongodb+srv://Daddydof:daddydofpw@cluster0.vbcfh6f.mongodb.net/test",
        "ACCESS_TOKEN_SECRET": "FEWIJIRJFI274892UJ2DNUERN29890",
        "REFRESH_TOKEN_SECRET": "FEWIJIRJFI274892UJ2DNUERN29891",
        "PAYPAL_CLIENT_ID": "ARmDyr9itwE4AkM7msQPyUYC1my0P7Py6xPXBa07fIc9eLmhgM5tl6h9UqwegpbcqQZEdroBd6K5YZWz",
        "CLOUD_UPDATE_PRESET": "zench_next",
        "CLOUD_NAME": "dppsrg96q",
        "CLOUD_API": "https://api.cloudinary.com/v1_1/dppsrg96q/image/upload",
        "NEXT_PUBLIC_ANALYTICS_ID": "123"
    }
}

module.exports = nextConfig
