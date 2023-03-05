import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

// Dependency Injection
@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
})
class AuthModule {}

export default AuthModule;
