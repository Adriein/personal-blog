import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { SignInQuery } from "Authorization/Application/SignIn/SignInQuery";
import { SignInResponse } from "Authorization/Application/SignIn/SignInResponse";
import { SignInRequest } from "Authorization/infrastructure/Controller/SignIn/SignInRequest";

@Controller('/signin')
export class SignInController {
  constructor(private readonly queryBus: QueryBus) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  public async signIn(@Body() body: SignInRequest): Promise<SignInResponse> {
    return await this.queryBus.execute(new SignInQuery(body.email, body.password))
  }

}