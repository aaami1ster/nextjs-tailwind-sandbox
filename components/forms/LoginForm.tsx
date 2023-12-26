import { lusitana } from "@/components/fonts";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <body
      className={clsx(
        `${lusitana.className} overflow-hidden text-sm font-normal`, // body
        "bg-[#F8F9FA] text-black" // bg-100
      )}
    >
      <div
        className={clsx(
          " z-0 relative flex flex-col flex-nowrap overflow-auto w-full h-full"
        )}
      >
        <main className="flex-grow flex-shrink-0 basis-auto">
          <div
            className={clsx(
              " w-full px-3 mx-auto md:max-w-[720px] mw576:max-w-[540px]", // container
              "py-12"
            )}
          >
            <div
              className={clsx(
                "max-w-[300px]",
                "relative flex flex-col min-w-0 break-words bg-clip-border rounded", // card
                "border-0 mx-auto",
                "bg-[#F8F9FA] text-black", // bg-100
                "" // o_database_list
              )}
            >
              <div
                className={
                  "bg-[#ffffffe6] text-black flex-auto p-4" // card-body
                }
              >
                <div className="flex justify-center pb-4 border-b border-solid border-b-[#dee2e6] mb-4">
                  <Image
                    width={100}
                    height={100}
                    className="max-h-[120px] max-w-full w-auto align-middle"
                    alt="Logo"
                    src="/company_logo.png"
                  />
                </div>

                <form
                  className={clsx(" block", "oe_login_form")}
                  role="form"
                  method="post"
                  // onSubmit={() => console.log("on submit...")}
                  action="/web/login"
                >
                  <input
                    type="hidden"
                    name="csrf_token"
                    value="5fe963cc09c2b7688ebcd08cce5305f4b102eaf8o1734670925"
                  />

                  <div className="block mb-4 field-login">
                    <label
                      htmlFor="login"
                      className={clsx(
                        " inline-block",
                        " mb-2" // form-label
                      )}
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      name="login"
                      id="login"
                      required={true}
                      autoFocus={true}
                      autoCapitalize="off"
                      className={
                        " block w-full py-[0.375rem] px-3 text-sm leading-6 text-[#212529] bg-white border border-solid border-[#CED4DA] rounded transition"
                      } // form-control
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className={clsx(
                        " inline-block",
                        " mb-2" // form-label
                      )}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      id="password"
                      required={true}
                      autoComplete="current-password"
                      maxLength={4096}
                      className={
                        " block w-full py-[0.375rem] px-3 text-sm leading-6 text-[#212529] bg-white border border-solid border-[#CED4DA] rounded transition"
                      } // form-control
                    />
                  </div>

                  <div
                    className={clsx(
                      "clearfix oe_login_buttons text-center gap-1 grid mb-1 pt-4"
                    )}
                  >
                    <button
                      type="submit"
                      className={clsx(
                        "inline-block font-light text-center align-middle cursor-pointer select-none border border-solid border-transparent py-[0.375rem] px-3 text-xs rounded transition", // btn
                        " bg-[#35979c] border-[#35979c] text-white" // btn-primary
                      )}
                    >
                      Log in
                    </button>
                    <div className="justify-between mt-2 flex text-sm">
                      <a
                        className="text-[#35979c] cursor-pointer"
                        href="/web/signup?"
                      >
                        {"Don\'t have an account?"}
                      </a>
                      <a
                        className="text-[#35979c] cursor-pointer"
                        href="/web/reset_password?"
                      >
                        Reset Password
                      </a>
                    </div>
                    <div className="o_login_auth"></div>
                  </div>

                  <input type="hidden" name="redirect" />
                </form>

                <div className="text-center text-sm mt-4 pt-4 border-t border-solid border-t-[#DEE2E6]">
                  <a
                    className="border-e border-solid border-[#DEE2E6] pe-2 me-1 text-[#35979c]"
                    href="/web/database/manager"
                  >
                    Manage Databases
                  </a>
                  <a
                    className="text-[#35979c] text-center text-sm"
                    href="https://www.odoo.com?utm_source=db&amp;utm_medium=auth"
                    target="_blank"
                  >
                    Powered by <span>Odoo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default LoginForm;
