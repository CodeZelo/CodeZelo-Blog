---
title: "How to Install WSL on Windows and Set Up Ubuntu for Web Development"
description: "Step-by-step guide to installing WSL on Windows and setting up Ubuntu for web development. Learn how to configure Git, Docker, Node.js, and build a professional dev workflow."
draft: false
categories: ["articles"]
tags: ["developer-tools"]
authors:
  - mahmoudadel
slug: "install-wsl-windows-setup-ubuntu-web-development"
weight: -23
---

If you're a web developer working on Windows, you've probably run into the classic problem: your local environment doesn’t match your production server—which is almost always running Linux.

The practical and straightforward solution? Use **WSL (Windows Subsystem for Linux)** and install **Ubuntu** as your development environment.

In this guide, you’ll learn how to:

- Install WSL from scratch
- Install Ubuntu
- Install Git
- Install Docker and Docker Compose
- Set up a real-world Linux-based development environment

## Why Use WSL as a Web Developer?

Before jumping in, let’s simplify the idea.

Instead of:

- Installing Linux on a separate machine
- Or running a full virtual machine like **VirtualBox**

WSL allows you to run Linux directly inside Windows—without the heavy resource usage of a traditional VM.

Here’s a quick comparison:

| WSL                             | Virtual Machine            |
| ------------------------------- | -------------------------- |
| Fast and lightweight            | Consumes more RAM and CPU  |
| Direct integration with Windows | Fully isolated system      |
| Ideal for web development       | Better for full OS testing |

If you're a web developer who wants the convenience of Windows (apps, games, daily tools) while developing in a professional Linux environment, WSL is the smart choice.

### Minimum Requirements

The good news? Almost any modern machine can handle it:

- Windows 10 (version 2004 or later)
- Windows 11
- At least 8GB RAM (more is better)

## Step 1: Install WSL

Open **PowerShell as Administrator** and run:

```bash
wsl --install
```

What does this command do?

- Enables WSL
- Enables the Virtual Machine Platform
- Installs WSL 2
- Automatically installs Ubuntu

Once installation finishes, restart your computer.

## Step 2: Set Up Ubuntu for the First Time

After restarting:

1. Open Ubuntu from the Start menu.
2. Wait for the initial setup to complete.
3. Create:
   - A username
   - A password

That’s it—you now have a full Linux environment running inside Windows.

## Verify You’re Using WSL 2

In PowerShell, run:

```bash
wsl -l -v
```

If the version shows **2**, you're good to go.

If it shows version 1, run:

```bash
wsl --set-default-version 2
```

## Step 3: Update Ubuntu

Inside Ubuntu, run:

```bash
sudo apt update
sudo apt upgrade -y
```

If you've worked with Ubuntu on a VPS or as a standalone OS before, the environment will feel instantly familiar.

## Step 4: Install Git

Every web developer needs Git to manage and update repositories.

Install it with:

```bash
sudo apt install git -y
```

Verify installation:

```bash
git --version
```

Then configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Step 5: Install Docker (The Professional Way)

Docker is essential for running:

- Node.js
- PHP
- Laravel
- MySQL
- PostgreSQL
- Redis
- And virtually any modern stack

Yes, you _could_ install Docker directly on Windows via Docker Desktop. But that GUI-based approach consumes more system resources.

Instead, we’ll install Docker directly inside Ubuntu—just like you would on a real production server.

### 1. Install Required Packages

```bash
sudo apt install ca-certificates curl gnupg -y
```

### 2. Add Docker’s Official GPG Key

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

### 3. Add the Docker Repository

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 4. Install Docker

```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

## Step 6: Run Docker Without sudo

Add your user to the Docker group:

```bash
sudo usermod -aG docker $USER
```

Then exit:

```bash
exit
```

Reopen Ubuntu and test:

```bash
docker --version
```

## Step 7: Using Docker Compose

Docker Compose is now built directly into Docker as:

```bash
docker compose
```

Check it with:

```bash
docker compose version
```

Notice the difference:

❌ `docker-compose`
✅ `docker compose`

## Quick Docker Test

Create a file:

```bash
nano docker-compose.yml
```

Paste:

```yaml
services:
  app:
    image: nginx
    ports:
      - "8080:80"
```

Run:

```bash
docker compose up
```

Open your browser at:

```
http://localhost:8080
```

You should see the Nginx welcome page 🎉

## Best Practices for Web Developers

✔ Store your projects inside the Linux filesystem—not inside `C:`

Example:

```
/home/mahmoud/projects
```

✔ Use Visual Studio Code with the **WSL extension**

This allows you to open your project directly inside the Linux environment while coding from Windows.

## Do You Need Docker Desktop?

You can work entirely without Docker Desktop if Docker is installed inside Ubuntu as shown above.

Docker Desktop provides:

- A graphical interface
- Container management tools
- Easier setup for beginners

But for professional developers?
Installing Docker inside Ubuntu is cleaner, lighter, and closer to a real production server experience.

## What You’re Now Ready to Build

You can confidently develop:

- Laravel
- Node.js
- Vue
- React
- Angular
- WordPress
- Or any modern stack you want to learn

All inside a real Linux environment—while still using Windows as your main OS.

## Final Thoughts

With:

- WSL 2
- Ubuntu
- Git
- Docker + Compose

You now have a professional-grade development environment that mirrors production servers by roughly 95%.

This dramatically reduces issues like:

- “It works on my machine, but not on the server.”
- Version mismatches
- Permission and path-related errors

If this setup feels overwhelming and you prefer something simpler, you might consider [using **Laragon** as an easier alternative for beginners](/en/categories/articles/web-development-environment-windows-laragon-guide/).

But if you’re aiming for a truly professional workflow, WSL is the smarter long-term investment.
