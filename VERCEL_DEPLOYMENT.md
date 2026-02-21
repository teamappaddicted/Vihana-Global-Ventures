# Vercel Deployment Guide

## Deployment Checklist

- [ ] Push code to GitHub
- [ ] Connect repository to Vercel at https://vercel.com
- [ ] Configure environment variables in Vercel dashboard
- [ ] Set custom domain (if applicable)
- [ ] Enable analytics (optional)
- [ ] Configure webhooks (if needed)

## Steps to Deploy on Vercel

### 1. Prerequisites
- GitHub account with repository pushed
- Vercel account (create at https://vercel.com)

### 2. Automatic Deployment
1. Visit https://vercel.com/dashboard
2. Click "Add New Project"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js configuration
5. Click "Deploy"

### 3. Manual Configuration (if needed)
The following files handle Vercel deployment:
- **vercel.json** - Vercel-specific configuration
- **next.config.ts** - Next.js and performance optimizations
- **.env.local** - Local environment variables
- **.env.example** - Example environment template

### 4. Environment Variables
Set these in your Vercel Dashboard (Project Settings > Environment Variables):
- `NEXT_PUBLIC_APP_NAME` - Application name
- `NEXT_PUBLIC_APP_URL` - Your domain URL

### 5. Custom Domain Setup
1. In Vercel Dashboard, go to Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions from your domain provider
4. Vercel will provision SSL certificate automatically

### 6. Preview & Production
- **Preview Deployments** - Auto-generated for every pull request
- **Production Deployment** - Triggered on push to main branch

### 7. Performance Monitoring
- Access analytics in Vercel Dashboard
- Monitor Web Vitals and performance metrics
- Check deployment logs for errors

## Build & Runtime Configuration

### Build Settings (Vercel)
```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### Functions Configuration
API routes use serverless functions with:
- Memory: 1024 MB
- Max Duration: 60 seconds

## Performance Optimizations Enabled

✅ React Compiler for optimization
✅ Image optimization with AVIF/WebP formats
✅ SWC minification for faster builds
✅ Cache headers for static assets
✅ Output file tracing for reduced build size
✅ Package import optimization

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Verify all dependencies in package.json
- Ensure environment variables are set correctly

### Slow Performance
- Check Web Vitals in Vercel Analytics
- Review serverless function execution time
- Monitor database query performance

### Domain Not Working
- Verify DNS records point to Vercel
- Wait up to 24 hours for DNS propagation
- Check certificate status in Vercel Dashboard

## Support
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://vercel.com/community)
