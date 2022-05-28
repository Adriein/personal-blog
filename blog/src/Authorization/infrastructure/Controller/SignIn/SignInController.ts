import { Body, ClassSerializerInterceptor, Controller, Post, Session, UseInterceptors } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { QueryBus } from "@nestjs/cqrs";
import { SignInQuery } from "Authorization/Application/SignIn/SignInQuery";
import { SignInResponse } from "Authorization/Application/SignIn/SignInResponse";
import { SignInRequest } from "Authorization/infrastructure/Controller/SignIn/SignInRequest";
import jwt from "jsonwebtoken";

@Controller('/signin')
export class SignInController {
  constructor(private readonly queryBus: QueryBus, private readonly config: ConfigService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  public async signIn(@Body() body: SignInRequest, @Session() session: any): Promise<SignInResponse> {
    const response = await this.queryBus.execute(new SignInQuery(body.email, body.password));

    session.user = jwt.sign(
      {
        name: response.name,
        email: response.email
      },
      this.config.get<string>('JWT_KEY')!,
    )

    return response;
  }
}