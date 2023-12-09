import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, UsersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
