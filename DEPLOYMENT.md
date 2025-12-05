# Deploying to Render

This guide will help you deploy your Next.js application to Render.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository
3. A Render account (sign up at https://render.com)

## Deployment Steps

### Option 1: Using render.yaml (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Render**
   - Go to https://dashboard.render.com
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file
   - Click "Apply" to deploy

### Option 2: Manual Setup

1. **Push your code to GitHub** (same as above)

2. **Create a new Web Service on Render**
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository

3. **Configure the service:**
   - **Name**: `sera-access-markets` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
   - **Plan**: Choose a plan (Starter is fine for most projects)

4. **Environment Variables** (if needed):
   - Add any environment variables in the Render dashboard
   - For now, you don't need any custom env vars

5. **Click "Create Web Service"**

## Important Notes

- **Package Manager**: This project uses `pnpm`. Render will auto-detect it from `pnpm-lock.yaml`
- **Node Version**: Render will use Node.js 18+ by default (compatible with Next.js 16)
- **Build Time**: First build may take 5-10 minutes
- **Auto-Deploy**: Render will automatically deploy when you push to your main branch

## After Deployment

1. Your site will be available at: `https://sera-access-markets.onrender.com` (or your custom domain)
2. First deployment may take a few minutes
3. Subsequent deployments are faster

## Custom Domain (Optional)

1. Go to your service settings in Render
2. Click "Custom Domains"
3. Add your domain and follow the DNS instructions

## Troubleshooting

- **Build fails**: Check the build logs in Render dashboard
- **App crashes**: Check the runtime logs
- **Slow first load**: This is normal on Render's free tier (spins down after inactivity)

## Updating Your Site

Simply push changes to your GitHub repository's main branch, and Render will automatically rebuild and deploy.

