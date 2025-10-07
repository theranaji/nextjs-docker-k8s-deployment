# DevOps Assignment - Next.js with Docker & Kubernetes

A containerized Next.js application with CI/CD pipeline and Kubernetes deployment.

## 🚀 Features

- **Next.js 14** with TypeScript and Tailwind CSS
- **Multi-stage Docker** build for optimized production images
- **GitHub Actions** CI/CD pipeline with GHCR integration
- **Kubernetes** deployment with health checks and auto-scaling
- **Security best practices** with non-root user and minimal attack surface

## 📋 Prerequisites

- Node.js 18+
- Docker
- Minikube
- kubectl
- Git

## 🛠️ Local Development

### 1. Clone and Setup
```bash
git clone <your-repo-url>
cd <repo-name>
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 3. Build Production
```bash
npm run build
npm start
```

## 🐳 Docker Commands

### Build Image
```bash
docker build -t nextjs-devops-app .
```

### Run Container
```bash
docker run -p 3000:3000 nextjs-devops-app
```

### Health Check
```bash
docker ps  # Check container health status
```

## ⚙️ GitHub Actions Setup

1. **Enable GitHub Container Registry**:
   - Go to repository Settings → Actions → General
   - Enable "Read and write permissions" for GITHUB_TOKEN

2. **Update Image Reference**:
   - Edit `k8s/deployment.yaml`
   - Replace `YOUR_USERNAME` with your GitHub username

3. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

The workflow will automatically:
- Build Docker image
- Push to GitHub Container Registry
- Tag with branch name and commit SHA

## ☸️ Kubernetes Deployment

### 1. Start Minikube
```bash
minikube start
minikube addons enable ingress
```

### 2. Update Deployment Image
Edit `k8s/deployment.yaml` and replace the image URL:
```yaml
image: ghcr.io/YOUR_USERNAME/nextjs-docker-k8s-deployment:latest
```

### 3. Deploy to Kubernetes
```bash
kubectl apply -f k8s/
```

### 4. Verify Deployment
```bash
# Check pods
kubectl get pods

# Check services
kubectl get services

# Check deployment status
kubectl rollout status deployment/nextjs-app
```

### 5. Access Application

**Option 1: NodePort Service**
```bash
minikube service nextjs-service --url
```

**Option 2: Port Forward**
```bash
kubectl port-forward service/nextjs-service 8080:80
```
Visit [http://localhost:8080](http://localhost:8080)

**Option 3: Minikube IP**
```bash
minikube ip
# Visit http://<minikube-ip>:30080
```

## 🔍 Monitoring & Debugging

### View Logs
```bash
kubectl logs -l app=nextjs-app
```

### Describe Resources
```bash
kubectl describe deployment nextjs-app
kubectl describe service nextjs-service
```

### Scale Application
```bash
kubectl scale deployment nextjs-app --replicas=5
```

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   GitHub Repo   │───▶│  GitHub Actions  │───▶│      GHCR       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                         │
                                                         ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│    Minikube     │◀───│   kubectl apply  │◀───│  K8s Manifests  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 📦 Container Registry

After successful GitHub Actions build, your image will be available at:
```
ghcr.io/YOUR_USERNAME/nextjs-docker-k8s-deployment:latest
```

## 🔧 Troubleshooting

### Common Issues

1. **Image Pull Error**:
   ```bash
   # Make repository public or configure image pull secrets
   kubectl create secret docker-registry ghcr-secret \
     --docker-server=ghcr.io \
     --docker-username=YOUR_USERNAME \
     --docker-password=YOUR_TOKEN
   ```

2. **Service Not Accessible**:
   ```bash
   # Check if minikube tunnel is running
   minikube tunnel
   ```

3. **Pod CrashLoopBackOff**:
   ```bash
   kubectl logs <pod-name>
   kubectl describe pod <pod-name>
   ```

## 📝 Assignment Checklist

- ✅ Next.js application created
- ✅ Multi-stage Dockerfile with best practices
- ✅ GitHub Actions workflow for CI/CD
- ✅ GHCR integration with proper tagging
- ✅ Kubernetes deployment with replicas
- ✅ Health checks (liveness & readiness probes)
- ✅ Service configuration for external access
- ✅ Comprehensive documentation

## 🎯 Production Considerations

- **Security**: Non-root user, minimal base image
- **Performance**: Multi-stage build, standalone output
- **Reliability**: Health checks, resource limits
- **Scalability**: Horizontal pod autoscaling ready
- **Monitoring**: Structured logging, metrics endpoints

---

**Repository URL**: `https://github.com/YOUR_USERNAME/nextjs-docker-k8s-deployment`  
**GHCR Image URL**: `ghcr.io/YOUR_USERNAME/nextjs-docker-k8s-deployment:latest`