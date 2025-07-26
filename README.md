Here’s a cleaned‑up install section with the repo name shown as plain text and all commands in their own code blocks:

---

# E‑Commerce‑App

## Installation

**1. Clone the repo**
Repository folder name:

```
E‑Commerce‑App
```

Clone command:

```bash
git clone https://github.com/yash-prince/E-Commerce-App.git
```

**2. Change into the project directory**

```bash
cd E-Commerce-App
```

**3. Create your own `.env` file**

```bash
cp .env.example .env
```

Then edit `server/.env` and fill in all required variables:

```
PORT=5000
MONGO_URL=<your MongoDB connection string>
PASSWORD=<your preferred password>
GMAIL=<your Gmail address>
JWT_SEC=<your JWT secret>
CLOUD_NAME=<your Cloudinary cloud name>
CLOUD_API_KEY=<your Cloudinary API key>
CLOUD_API_SECRET=<your Cloudinary API secret>
```

**4. Install backend dependencies**

```bash
npm install
```

**5. Run the backend server**

```bash
npm run dev
```

You should now have the back end running on `http://localhost:5000`.
