import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  // 模拟商家账号（实际应该存数据库）
  private adminAccount = {
    username: 'admin',
    password: 'admin123', // 实际应该加密存储
  };

  // 商家登录
  async login(username: string, password: string) {
    if (username === this.adminAccount.username && password === this.adminAccount.password) {
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
      return {
        token,
        admin: {
          username,
          shopName: '河美果里果气',
          avatar: '🍓',
        },
      };
    }
    return null;
  }

  // 验证token
  validateToken(token: string) {
    try {
      const decoded = Buffer.from(token, 'base64').toString();
      return decoded.includes(this.adminAccount.username);
    } catch {
      return false;
    }
  }
}