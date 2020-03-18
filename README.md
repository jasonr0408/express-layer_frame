Author: Jason Liao

### 資料夾結構：
├── public                        # 暴露靜態檔
├── src
│   ├── Adapters                  # 介面隔離層
│   │   ├── Controllers
│   │   ├── Repositories
│   │   └── Services
│   ├── Controllers
│   │   └── WagersController.ts
│   ├── Repositories              # 資料層
│   │   └── WagersRepository.ts
│   ├── Routes                    # 路由層
│   │   └── WagersRoute.ts
│   ├── Services                  # 核心邏輯層
│   │   └── WagersService.ts
│   └── app.ts                    # 程式進入點
├── tsconfig.json
├── package-lock.json
├── package.json
└── yarn.lock

### 缺少模組

 - mongodb client
 - log