import Navbar from "@/components/Layout/Marketplace/Navbar";
import PhoneNumberLibraryHeader from "@/components/Layout/Marketplace/PhoneNumberLibraryHeader";
import React from "react";

function Marketplace() {
  return (
    <div className="w-full hide-scrollbar overflow-hidden">
      <Navbar />
      <div className="bg-foreground/10 h-[1px] w-[100%] rounded-full scale-100">
        <span className="opacity-0">.</span>
      </div>
      <section>
        <div className="space-y-4">
          <div className="flex items-center justify-between px-4 mt-6">
            <h2 className="text-lg font-bold">Featured Voices</h2>
          </div>
        </div>
        {/* Featured Voices */}

        <div className="space-y-4 mt-2 p-4">
          <div className="relative">
            <section className="flex items-center justify-center w-full mx-auto">
              <button
                className="inline-flex items-center justify-center p-0 m-0 text-decoration-none cursor-pointer border-0 bg-transparent touch-manipulation appearance-none -webkit-appearance-none -webkit-tap-highlight-color-[rgba(var(--text-high-contrast-rgb-value),0.5)] disabled:text-detail-high-contrast"
                type="button"
                disabled
              >
                <svg
                  width="5.21484"
                  height="17.4707"
                  viewBox="0 0 5.21484 17.4707"
                  fill="none"
                  stroke="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[30px] fill-icon/80"
                >
                  <g>
                    <rect
                      height="17.4707"
                      opacity="0"
                      width="5.21484"
                      x="0"
                      y="0"
                    ></rect>
                    <path
                      d="M3.00781 16.7871C3.1543 17.168 3.48633 17.4121 3.83789 17.4121C4.41406 17.4121 4.85352 16.9922 4.85352 16.416C4.85352 16.123 4.6875 15.7422 4.58984 15.4883L1.65039 8.00781L1.65039 9.39453L4.58984 1.91406C4.6875 1.66016 4.85352 1.26953 4.85352 0.986328C4.85352 0.419922 4.41406 0 3.83789 0C3.48633 0 3.1543 0.234375 3.00781 0.615234L0.390625 7.27539C0.214844 7.72461 0 8.27148 0 8.70117C0 9.13086 0.214844 9.67773 0.390625 10.127Z"
                      fillOpacity="0.85"
                    ></path>
                  </g>
                </svg>
              </button>
              <div className="w-full overflow-hidden">
                <div
                  className="flex touch-pan-y touch-pinch-zoom -ml-[1rem] justify-between"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                  <div className="transform translate-x-0 translate-y-0 translate-z-0 min-w-0 pl-4 flex-shrink-0 flex-grow-0 cursor-grab w-[33%] xl:w-[25%]">
                    <div className="transition-all delay-75 duration-600 max-w-xs rounded-lg overflow-hidden bg-gray-900 shadow-lg hover:shadow-[0px_0px_12px_2px_rgba(55,170,157,0.3)]">
                      <div className="relative">
                        <img
                          src="//images.ctfassets.net/rrpjq663t5ju/7lhwYwWjihzRnCWv2oy6TM/a2ad46dd5643c31f8945f00159864908/presenter.png"
                          alt="Road Dawg"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute bg-secondary/70 bottom-0 h-[100%] w-full flex flex-col pt-8 pb-4 px-4">
                          <div className="flex items-start justify-between">
                            <h2 className="text-white text-lg font-bold">
                              Road Dawg
                            </h2>
                            <button
                              title="Copy ID"
                              className="hover:bg-gray-400/10 rounded-md"
                            >
                              <svg
                                width="16.7871"
                                height="27.0605"
                                viewBox="0 0 16.7871 27.0605"
                                fill="none"
                                stroke="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 fill-gray-400 hover:fill-gray-100"
                              >
                                <g>
                                  <rect
                                    height="27.0605"
                                    opacity="0"
                                    width="16.7871"
                                    x="0"
                                    y="0"
                                  ></rect>
                                  <path
                                    d="M16.4258 6.92383L16.4258 21.7285C16.4258 23.7793 15.4199 24.7949 13.3984 24.7949L3.02734 24.7949C1.00586 24.7949 0 23.7793 0 21.7285L0 6.92383C0 4.87305 1.00586 3.85742 3.02734 3.85742L3.15663 3.85742C3.1484 3.93681 3.14453 4.01835 3.14453 4.10156L3.14453 5.12695C3.14453 5.23091 3.15067 5.33228 3.16478 5.42969L3.10547 5.42969C2.08984 5.42969 1.57227 5.97656 1.57227 6.94336L1.57227 21.709C1.57227 22.6855 2.08984 23.2227 3.10547 23.2227L13.3203 23.2227C14.3359 23.2227 14.8535 22.6855 14.8535 21.709L14.8535 6.94336C14.8535 5.97656 14.3359 5.42969 13.3203 5.42969L13.261 5.42969C13.2751 5.33228 13.2812 5.23091 13.2812 5.12695L13.2812 4.10156C13.2812 4.01835 13.2774 3.93681 13.2692 3.85742L13.3984 3.85742C15.4199 3.85742 16.4258 4.87305 16.4258 6.92383Z"
                                    fillOpacity="0.85"
                                  ></path>
                                  <path
                                    d="M5.19531 6.09375L11.2305 6.09375C11.7969 6.09375 12.1387 5.73242 12.1387 5.12695L12.1387 4.10156C12.1387 3.49609 11.7969 3.13477 11.2305 3.13477L10.332 3.13477C10.2637 2.03125 9.3457 1.13281 8.21289 1.13281C7.08008 1.13281 6.16211 2.03125 6.09375 3.13477L5.19531 3.13477C4.62891 3.13477 4.28711 3.49609 4.28711 4.10156L4.28711 5.12695C4.28711 5.73242 4.62891 6.09375 5.19531 6.09375ZM8.21289 4.0625C7.74414 4.0625 7.36328 3.67188 7.36328 3.21289C7.36328 2.73438 7.74414 2.35352 8.21289 2.35352C8.68164 2.35352 9.0625 2.73438 9.0625 3.21289C9.0625 3.67188 8.68164 4.0625 8.21289 4.0625Z"
                                    fillOpacity="0.85"
                                  ></path>
                                  <path
                                    d="M3.90625 18.6621L8.24219 18.6621C8.57422 18.6621 8.84766 18.3887 8.84766 18.0566C8.84766 17.7246 8.58398 17.4512 8.24219 17.4512L3.90625 17.4512C3.56445 17.4512 3.29102 17.7246 3.29102 18.0566C3.29102 18.3887 3.57422 18.6621 3.90625 18.6621Z"
                                    fillOpacity="0.85"
                                  ></path>
                                  <path
                                    d="M3.90625 15.0098L12.5195 15.0098C12.8613 15.0098 13.1348 14.7363 13.1348 14.3945C13.1348 14.0625 12.8613 13.7988 12.5195 13.7988L3.90625 13.7988C3.56445 13.7988 3.29102 14.0625 3.29102 14.3945C3.29102 14.7363 3.56445 15.0098 3.90625 15.0098Z"
                                    fillOpacity="0.85"
                                  ></path>
                                  <path
                                    d="M3.90625 11.543L12.5195 11.543C12.8516 11.543 13.1348 11.2695 13.1348 10.9375C13.1348 10.6055 12.8516 10.3223 12.5195 10.3223L3.90625 10.3223C3.57422 10.3223 3.29102 10.6055 3.29102 10.9375C3.29102 11.2695 3.57422 11.543 3.90625 11.543Z"
                                    fillOpacity="0.85"
                                  ></path>
                                </g>
                              </svg>
                            </button>
                          </div>
                          <span className="text-xs inline-block w-[100px] mt-1 bg-blue-500/10 border border-blue-500/30 rounded-lg py-1 px-2 font-bold">
                            11LABS
                          </span>
                          <div className="flex items-center justify-between mt-2">
                            <button className="transition-all duration-300 ease-in-out p-2 rounded-full mr-4 !h-[55px] !w-[55px] flex items-center justify-center flex-none bg-primary/10 border-primary/10">
                              <svg
                                width="16.6406"
                                height="16.5527"
                                viewBox="0 0 16.6406 16.5527"
                                fill="none"
                                stroke="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="fill-icon/60"
                              >
                                <g>
                                  <rect
                                    height="16.5527"
                                    opacity="0"
                                    width="16.6406"
                                    x="0"
                                    y="0"
                                  ></rect>
                                  <path
                                    d="M3.04688 16.5527C3.4375 16.5527 3.76953 16.3965 4.16016 16.1719L15.5469 9.58984C16.3574 9.11133 16.6406 8.79883 16.6406 8.28125C16.6406 7.76367 16.3574 7.45117 15.5469 6.98242L4.16016 0.390625C3.76953 0.166016 3.4375 0.0195312 3.04688 0.0195312C2.32422 0.0195312 1.875 0.566406 1.875 1.41602L1.875 15.1465C1.875 15.9961 2.32422 16.5527 3.04688 16.5527Z"
                                    fillOpacity="0.85"
                                  ></path>
                                </g>
                              </svg>
                            </button>
                            <div className="flex flex-col">
                              <span className="text-lg text-right font-bold">
                                Best for:
                              </span>
                              <span className="text-sm text-right">
                                Conversational, Healthcare
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Additional items would follow the same structure */}
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Explore Voices */}

        <div className="sticky bg-secondary top-[calc(50px)] z-10 pb-6 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between pt-8 px-4 mb-6">
              <h2 className="text-lg text-white font-bold">
                Explore all voices
              </h2>
              <div className="flex gap-2 items-center">
                <button className="w-full justify-center ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group border hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-9 px-3 rounded-lg bg-white/5 border-white/20 space-x-2 whitespace-nowrap flex items-center hover:bg-white/20">
                  <svg
                    width="21.0254"
                    height="20.4785"
                    viewBox="0 0 21.0254 20.4785"
                    fill="none"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fill-icon text-text w-3 h-3 mr-1"
                  >
                    <g>
                      <rect
                        height="20.4785"
                        opacity="0"
                        width="21.0254"
                        x="0"
                        y="0"
                      ></rect>
                      <path
                        d="M15.9277 3.04688L15.9277 4.54102L14.3555 4.54102L14.3555 3.13477C14.3555 2.11914 13.8086 1.5918 12.8418 1.5918L3.08594 1.5918C2.10938 1.5918 1.57227 2.11914 1.57227 3.13477L1.57227 12.8418C1.57227 13.8574 2.10938 14.3848 3.08594 14.3848L4.73633 14.3848L4.73633 15.957L3.06641 15.957C1.01562 15.957 0 14.9414 0 12.9297L0 3.04688C0 1.03516 1.01562 0.0195312 3.06641 0.0195312L12.8711 0.0195312C14.9023 0.0195312 15.9277 1.03516 15.9277 3.04688Z"
                        fillOpacity="0.85"
                      ></path>
                    </g>
                  </svg>
                  Clone
                </button>
                <button className="w-full justify-center ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group border hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-9 px-3 rounded-lg bg-white/5 border-white/20 space-x-2 whitespace-nowrap flex items-center hover:bg-white/20">
                  <svg
                    width="16.4746"
                    height="16.123"
                    viewBox="0 0 16.4746 16.123"
                    fill="none"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fill-icon text-text w-2.5 h-2.5 mr-1"
                  >
                    <g>
                      <rect
                        height="16.123"
                        opacity="0"
                        width="16.4746"
                        x="0"
                        y="0"
                      ></rect>
                      <path
                        d="M0 8.05664C0 8.53516 0.400391 8.92578 0.869141 8.92578L7.1875 8.92578L7.1875 15.2441C7.1875 15.7129 7.57812 16.1133 8.05664 16.1133C8.53516 16.1133 8.93555 15.7129 8.93555 15.2441L8.93555 8.92578L15.2441 8.92578C15.7129 8.92578 16.1133 8.53516 16.1133 8.05664C16.1133 7.57812 15.7129 7.17773 15.2441 7.17773L8.93555 7.17773L8.93555 0.869141C8.93555 0.400391 8.53516 0 8.05664 0C7.57812 0 7.1875 0.400391 7.1875 0.869141L7.1875 7.17773L0.869141 7.17773C0.400391 7.17773 0 7.57812 0 8.05664Z"
                        fillOpacity="0.85"
                      ></path>
                    </g>
                  </svg>
                  Add
                </button>
                <button
                  className="w-full justify-center ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group border hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-9 px-3 rounded-lg bg-white/5 border-white/20 space-x-2 whitespace-nowrap flex items-center !cursor-not-allowed"
                  disabled
                >
                  <svg
                    width="24.2507"
                    height="19.9316"
                    viewBox="0 0 24.2507 19.9316"
                    fill="none"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fill-icon text-text w-3 h-3 mr-1"
                  >
                    <g>
                      <rect
                        height="19.9316"
                        opacity="0"
                        width="24.2507"
                        x="0"
                        y="0"
                      ></rect>
                      <path
                        d="M0.19663 9.99023C-0.184229 10.5273-0.00844799 11.0059 0.694677 11.0059L2.04233 11.0059C2.56968 15.9766 6.85679 19.9219 11.9447 19.9219C14.9232 19.9219 17.6185 18.5645 19.4544 16.4551C19.8158 16.0352 19.7669 15.5078 19.3861 15.2344C19.0052 14.9609 18.5365 15.0586 18.224 15.4199C16.7103 17.168 14.4642 18.2617 11.9447 18.2617C7.68686 18.2617 4.22007 15.1074 3.72202 11.0059L5.1771 11.0059C5.87046 11.0059 6.04624 10.5273 5.67515 10L3.48765 6.88477C3.17515 6.43555 2.7064 6.42578 2.38413 6.88477ZM4.44468 3.4668C4.07358 3.88672 4.12241 4.4043 4.51304 4.67773C4.8939 4.95117 5.35288 4.86328 5.67515 4.50195C7.19858 2.76367 9.44468 1.66016 11.9447 1.66016C16.1927 1.66016 19.6595 4.81445 20.1673 8.92578L18.7123 8.92578C18.0189 8.92578 17.8431 9.39453 18.2142 9.93164L20.4017 13.0469C20.7142 13.4961 21.183 13.5059 21.5052 13.0469L23.683 9.94141C24.0736 9.39453 23.888 8.92578 23.1849 8.92578L21.847 8.92578C21.3099 3.95508 17.0326 0 11.9447 0C8.96616 0 6.28061 1.34766 4.44468 3.4668Z"
                        fillOpacity="0.85"
                      ></path>
                    </g>
                  </svg>
                  Sync
                </button>
              </div>
            </div>
            <div className="flex items-center mt-24 justify-between px-4 gap-4">
              <div className="w-[48%] relative">
                <svg
                  width="19.4434"
                  height="19.2676"
                  viewBox="0 0 19.4434 19.2676"
                  fill="none"
                  stroke="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 fill-gray-400 w-[14px]"
                >
                  <g>
                    <rect
                      height="19.2676"
                      opacity="0"
                      width="19.4434"
                      x="0"
                      y="0"
                    ></rect>
                    <path
                      d="M0 7.79297C0 12.0898 3.49609 15.5859 7.79297 15.5859C9.49219 15.5859 11.0449 15.0391 12.3242 14.1211L17.1289 18.9355C17.3535 19.1602 17.6465 19.2676 17.959 19.2676C18.623 19.2676 19.082 18.7695 19.082 18.1152C19.082 17.8027 18.9648 17.5195 18.7598 17.3145L13.9844 12.5098C14.9902 11.2012 15.5859 9.57031 15.5859 7.79297C15.5859 3.49609 12.0898 0 7.79297 0C3.49609 0 0 3.49609 0 7.79297ZM1.66992 7.79297C1.66992 4.41406 4.41406 1.66992 7.79297 1.66992C11.1719 1.66992 13.916 4.41406 13.916 7.79297C13.916 11.1719 11.1719 13.916 7.79297 13.916C4.41406 13.916 1.66992 11.1719 1.66992 7.79297Z"
                      fillOpacity="0.85"
                    ></path>
                  </g>
                </svg>
                <input
                  type="text"
                  placeholder="Search by keyword, id, use..."
                  className="flex h-9 w-full text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(240,5%,50%)] outline-none focus-visible:ring-1 ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-background text-text hover:bg-background/90 focus:bg-background/85 border rounded-md px-10 py-5 shadow-sm shadow-black/10 transition-all duration-150 ease-in-out border-input"
                  value=""
                />
              </div>
              <div className="w-[20%]">
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r12t:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="w-full px-3 flex [&>svg]:h-5 [&>svg]:w-5 justify-between items-center read-only:bg-background disabled:cursor-not-allowed disabled:opacity-50 transition duration-300 border-default-300 text-default-500 focus:outline-none focus:border-default-500/50 disabled:bg-default-200 placeholder:text-accent-foreground/50 [&>svg]:stroke-default-600 border rounded-lg h-10 text-sm"
                >
                  <span style={{ pointerEvents: "none" }}>11labs</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div className="w-[20%]">
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r12u:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="w-full px-3 flex [&>svg]:h-5 [&>svg]:w-5 justify-between items-center read-only:bg-background disabled:cursor-not-allowed disabled:opacity-50 transition duration-300 border-default-300 text-default-500 focus:outline-none focus:border-default-500/50 disabled:bg-default-200 placeholder:text-accent-foreground/50 [&>svg]:stroke-default-600 border rounded-lg h-10 text-sm"
                >
                  <span style={{ pointerEvents: "none" }}>all</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div className="w-[20%]">
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r12v:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  data-placeholder=""
                  className="w-full px-3 flex [&>svg]:h-5 [&>svg]:w-5 justify-between items-center read-only:bg-background disabled:cursor-not-allowed disabled:opacity-50 transition duration-300 border-default-300 text-default-500 focus:outline-none focus:border-default-500/50 disabled:bg-default-200 placeholder:text-accent-foreground/50 [&>svg]:stroke-default-600 border rounded-lg h-10 text-sm"
                >
                  <span style={{ pointerEvents: "none" }}>Select Accent</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex mt-24 mb-4 justify-end px-4"></div>
          </div>
        </div>

        {/* Voice List */}
        <div className="relative bg-background/60 pb-20 ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 pt-8 pb-8">
            <div className="transition-all delay-75 duration-600 ease-in-out p-4 rounded-lg bg-secondary shadow-md hover:bg-primary/5 hover:shadow-[0px_0px_12px_2px_rgba(55,170,157,0.4)] text-white">
              <div className="flex items-start justify-between">
                <h2
                  className="text-gray-400 h-8 text-ellipsis overflow-hidden text-xs font-bold capitalize"
                  title="francotest"
                >
                  francotest
                </h2>
                <button title="Copy ID" className="hover:bg-gray-400/10 rounded-md">
                  <svg
                    width="16.7871"
                    height="27.0605"
                    viewBox="0 0 16.7871 27.0605"
                    fill="none"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 fill-gray-400 hover:fill-gray-100"
                  >
                    <g>
                      <rect
                        height="27.0605"
                        opacity="0"
                        width="16.7871"
                        x="0"
                        y="0"
                      ></rect>
                      <path
                        d="M16.4258 6.92383L16.4258 21.7285C16.4258 23.7793 15.4199 24.7949 13.3984 24.7949L3.02734 24.7949C1.00586 24.7949 0 23.7793 0 21.7285L0 6.92383C0 4.87305 1.00586 3.85742 3.02734 3.85742L3.15663 3.85742C3.1484 3.93681 3.14453 4.01835 3.14453 4.10156L3.14453 5.12695C3.14453 5.23091 3.15067 5.33228 3.16478 5.42969L3.10547 5.42969C2.08984 5.42969 1.57227 5.97656 1.57227 6.94336L1.57227 21.709C1.57227 22.6855 2.08984 23.2227 3.10547 23.2227L13.3203 23.2227C14.3359 23.2227 14.8535 22.6855 14.8535 21.709L14.8535 6.94336C14.8535 5.97656 14.3359 5.42969 13.3203 5.42969L13.261 5.42969C13.2751 5.33228 13.2812 5.23091 13.2812 5.12695L13.2812 4.10156C13.2812 4.01835 13.2774 3.93681 13.2692 3.85742L13.3984 3.85742C15.4199 3.85742 16.4258 4.87305 16.4258 6.92383Z"
                        fillOpacity="0.85"
                      ></path>
                      <path
                        d="M5.19531 6.09375L11.2305 6.09375C11.7969 6.09375 12.1387 5.73242 12.1387 5.12695L12.1387 4.10156C12.1387 3.49609 11.7969 3.13477 11.2305 3.13477L10.332 3.13477C10.2637 2.03125 9.3457 1.13281 8.21289 1.13281C7.08008 1.13281 6.16211 2.03125 6.09375 3.13477L5.19531 3.13477C4.62891 3.13477 4.28711 3.49609 4.28711 4.10156L4.28711 5.12695C4.28711 5.73242 4.62891 6.09375 5.19531 6.09375ZM8.21289 4.0625C7.74414 4.0625 7.36328 3.67188 7.36328 3.21289C7.36328 2.73438 7.74414 2.35352 8.21289 2.35352C8.68164 2.35352 9.0625 2.73438 9.0625 3.21289C9.0625 3.67188 8.68164 4.0625 8.21289 4.0625Z"
                        fillOpacity="0.85"
                      ></path>
                      <path
                        d="M3.90625 18.6621L8.24219 18.6621C8.57422 18.6621 8.84766 18.3887 8.84766 18.0566C8.84766 17.7246 8.58398 17.4512 8.24219 17.4512L3.90625 17.4512C3.56445 17.4512 3.29102 17.7246 3.29102 18.0566C3.29102 18.3887 3.57422 18.6621 3.90625 18.6621Z"
                        fillOpacity="0.85"
                      ></path>
                      <path
                        d="M3.90625 15.0098L12.5195 15.0098C12.8613 15.0098 13.1348 14.7363 13.1348 14.3945C13.1348 14.0625 12.8613 13.7988 12.5195 13.7988L3.90625 13.7988C3.56445 13.7988 3.29102 14.0625 3.29102 14.3945C3.29102 14.7363 3.56445 15.0098 3.90625 15.0098Z"
                        fillOpacity="0.85"
                      ></path>
                      <path
                        d="M3.90625 11.543L12.5195 11.543C12.8516 11.543 13.1348 11.2695 13.1348 10.9375C13.1348 10.6055 12.8516 10.3223 12.5195 10.3223L3.90625 10.3223C3.57422 10.3223 3.29102 10.6055 3.29102 10.9375C3.29102 11.2695 3.57422 11.543 3.90625 11.543Z"
                        fillOpacity="0.85"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-end mt-4">
                <div className="flex flex-col place-self-end">
                  <span className="text-[0.7rem] text-right mb-1">
                    <span className="text-gray-400">$</span>0.036{" "}
                    <span className="text-gray-400">/ min</span>
                  </span>
                  <span className="text-[0.7rem] text-right mb-1">
                    <span className="text-gray-400">~</span> 400{" "}
                    <span className="text-gray-400">ms</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="transition-all delay-75 duration-600 ease-in-out p-4 rounded-lg bg-secondary shadow-md hover:bg-primary/5 hover:shadow-[0px_0px_12px_2px_rgba(55,170,157,0.4)] text-white">
              <div className="flex items-start justify-between">
                <h2
                  className="text-gray-400 h-8 text-ellipsis overflow-hidden text-xs font-bold capitalize"
                  title="test3"
                >
                  test3
                </h2>
                <button title="Copy ID" className="hover:bg-gray-400/10 rounded-md">
                  <svg
                    width="16.7871"
                    height="27.0605"
                    viewBox="0 0 16.7871 27.0605"
                    fill="none"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 fill-gray-400 hover:fill-gray-100"
                  >
                    <g>
                      <rect
                        height="27.0605"
                        opacity="0"
                        width="16.7871"
                        x="0"
                        y="0"
                      ></rect>
                      <path
                        d="M16.4258 6.92383L16.4258 21.7285C16.4258 23.7793 15.4199 24.7949 13.3984 24.7949L3.02734 24.7949C1.00586 24.7949 0 23.7793 0 21.7285L0 6.92383C0 4.87305 1.00586 3.85742 3.02734 3.85742L3.15663 3.85742C3.1484 3.93681 3.14453 4.01835 3.14453 4.10156L3.14453 5.12695C3.14453 5.23091 3.15067 5.33228 3.16478 5.42969L3.10547 5.42969C2.08984 5.42969 1.57227 5.97656 1.57227 6.94336L1.57227 21.709C1.57227 22.6855 2.08984 23.2227 3.10547 23.2227L13.3203 23.2227C14.3359 23.2227 14.8535 22.6855 14.8535 21.709L14.8535 6.94336C14.8535 5.97656 14.3359 5.42969 13.3203 5.42969L13.261 5.42969C13.2751 5.33228 13.2812 5.23091 13.2812 5.12695L13.2812 4.10156C13.2812 4.01835 13.2774 3.93681 13.2692 3.85742L13.3984 3.85742C15.4199 3.85742 16.4258 4.87305 16.4258 6.92383Z"
                        fillOpacity="0.85"
                      ></path>
                      <path
                        d="M5.19531 6.09375L11.2305 6.09375C11.7969 6.09375 12.1387 5.73242 12.1387 5.12695L12.1387 4.10156C12.1387 3.49609 11.7969 3.13477 11.2305 3.13477L10.332 3.13477C10.2637 2.03125 9.3457 1.13281 8.21289 1.13281C7.08008 1.13281 6.16211 2.03125 6.09375 3.13477L5.19531 3.13477C4.62891 3.13477 4.28711 3.49609 4.28711 4.10156L4.28711 5.12695C4.28711 5.73242 4.62891 6.09375 5.19531 6.09375ZM8.21289 4.0625C7.74414 4.0625 7.36328 3.67188 7.36328 3.21289C7.36328 2.73438 7.74414 2.35352 8.21289 2.35352C8.68164 2.35352 9.0625 2.73438 9.0625 3.21289C9.0625 3.67188 8.68164 4.0625 8.21289 4.0625Z"
                        fillOpacity="0.85"
                      ></path>
                      <path
                        d="M3.90625 18.6621L8.24219 18.6621C8.57422 18.6621 8.84766 18.3887 8.84766 18.0566C8.84766 17.7246 8.58398 17.4512 8.24219 17.4512L3.90625 17.4512C3.56445 17.4512 3.29102 17.7246 3.29102 18.0566C3.29102 18.3887 3.57422 18.6621 3.90625 18.6621Z"
                        fillOpacity="0.85"
                      ></path>
                      <path
                        d="M3.90625 15.0098L12.5195 15.0098C12.8613 15.0098 13.1348 14.7363 13.1348 14.3945C13.1348 14.0625 12.8613 13.7988 12.5195 13.7988L3.90625 13.7988C3.56445 13.7988 3.29102 14.0625 3.29102 14.3945C3.29102 14.7363 3.56445 15.0098 3.90625 15.0098Z"
                        fillOpacity="0.85"
                      ></path>
                      <path
                        d="M3.90625 11.543L12.5195 11.543C12.8516 11.543 13.1348 11.2695 13.1348 10.9375C13.1348 10.6055 12.8516 10.3223 12.5195 10.3223L3.90625 10.3223C3.57422 10.3223 3.29102 10.6055 3.29102 10.9375C3.29102 11.2695 3.57422 11.543 3.90625 11.543Z"
                        fillOpacity="0.85"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-end mt-4">
                <div className="flex flex-col place-self-end">
                  <span className="text-[0.7rem] text-right mb-1">
                    <span className="text-gray-400">$</span>0.036{" "}
                    <span className="text-gray-400">/ min</span>
                  </span>
                  <span className="text-[0.7rem] text-right mb-1">
                    <span className="text-gray-400">~</span> 400{" "}
                    <span className="text-gray-400">ms</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-10 px-4 py-2 w-[200px] block truncate hover:no-underline">
              Load more ...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Marketplace;
