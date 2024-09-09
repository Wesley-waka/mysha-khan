<template>
    <Navbar />
    <div class="bg-custom-image bg-cover bg-center h-[820px] text-white bg-transparent">



        <div class="mx-auto px-4">
            <div class="flex flex-col">
                <div class="flex items-center h-16 bg-transparent relative z-20">
                    <div class="md:hidden flex items-center">
                        <button @click="toggleMenu" class="text-white focus:outline-none bg-transparent z-30">
                            <i class="pi pi-bars text-2xl"></i>
                        </button>
                    </div>
                </div>


                <div class="flex items-center justify-center flex-grow pb-2 pt-[400px]">
                    <div class="text-center px-4 md:px-8">
                        <h1 class="text-2xl md:leading-[90px] leading-[80px] text-[40px] md:text-[80px] font-medium mb-4">
                            More Comfortable.
                            <br>More
                            Classy.
                        </h1>
                        <h1>Make your living experience even more memorable</h1>
                        <!-- <p class="text-base md:text-lg">Get to discover our products and services tailored just for you.</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-[100rem] px-4 mx-auto">
        <div class="flex flex-col md:flex-row md:space-x-24 py-10 ">
            <div>
                <h1 class="text-[70px] leading-tight">Enjoy Quality Life in <br> Perumnas Housing</h1>
            </div>
            <div class="lg:w-[820px] md:w-[400px] flex flex-col space-y-12">
                <p class="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                    ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit
                    anim id est laborum.
                </p>
                <div class="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-7">
                    <h1>
                        <p class="text-[40px]">+100</p>
                        <p class="text-slate-500 text-[30px]">Units Ready</p>
                    </h1>
                    <h1>
                        <p class="text-[40px]">+60K</p>
                        <p class="text-slate-500 text-[30px]">Customers</p>
                    </h1>
                    <h1>
                        <p class="text-[40px]">+70K</p>
                        <p class="text-slate-500 text-[30px]">Review</p>
                    </h1>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-[100rem] px-4 mx-auto">
        <div class="flex flex-row space-x-10 overflow-x-auto">
            <img src="/about-hero.jpg" class="rounded-md w-[620px]" alt="" srcset="">

            <img src="/about-hero1.jpg" class="rounded-md w-[620px]" alt="" srcset="">

            <img src="/hero-3.jpg" class="rounded-md w-[620px]" alt="" srcset="">
        </div>
    </div>

    <div class="max-w-[90rem] my-12">
        <div class="w-full flex items-center lg:items-end px-4 lg:px-0 lg:justify-end">
            <!-- Apply flex and justify-end here -->
            <div class="flex flex-col space-y-8">
                <div class="flex flex-col gap-6">
                    <h1 class="text-[35px]">Strategic Location</h1>
                    <p class="lg:w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati
                        voluptates reprehenderit eos quo modi accusantium accusamus incidunt porro deleniti nobis soluta
                        eaque blanditiis repellendus, earum dolores repellat. Itaque, molestias.</p>
                </div>
                <div class="flex flex-col gap-6">
                    <h1 class="text-[35px]">Strategic Location</h1>
                    <p class="lg:w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati
                        voluptates reprehenderit eos quo modi accusantium accusamus incidunt porro deleniti nobis soluta
                        eaque blanditiis repellendus, earum dolores repellat. Itaque, molestias.</p>
                </div>
                <div class="flex flex-col gap-6">
                    <h1 class="text-[35px]">Strategic Location</h1>
                    <p class="lg:w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati
                        voluptates reprehenderit eos quo modi accusantium accusamus incidunt porro deleniti nobis soluta
                        eaque blanditiis repellendus, earum dolores repellat. Itaque, molestias.</p>
                </div>
            </div>
        </div>
    </div>


    <div class="max-w-[100rem] px-4 mx-auto">
        <div class="flex lg:flex-row flex-col space-y-6 lg:space-y-0 lg:space-x-6 my-16">
            <div>
                <h1 class="text-[36px] leading-tight">Find Your Dream <br> Home</h1>
                <p class="lg:w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum modi necessitatibus
                    quia
                    alias exercitationem
                    sequi soluta laborum possimus porro at, impedit sunt veritatis. Cupiditate itaque fuga impedit hic
                    debitis.
                </p>
                <img src="/hero-3.jpg" class="lg:w-[620px] mt-10 rounded-md" alt="">
            </div>

            <div>
                <img src="/about-stairs.jpg" class="w-[950px] h-[660px]  rounded-md" alt="" srcset="">

                <img src="/about-house.jpg" class="w-[420px] h-[350px] mt-5 rounded-md" alt="" srcset="">

            </div>
        </div>
    </div>

    <!-- Testimonials -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
            <div class="hidden md:block mb-24 md:mb-0 sm:px-6">
                <div class="relative">
                    <img class="rounded-xl"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=500&h=600&q=80"
                        alt="Avatar">

                    <!-- SVG Element -->
                    <div class="absolute bottom-0 start-0 -z-[1] translate-y-10 -translate-x-14">
                        <svg class="max-w-40 h-auto text-gray-400 dark:text-neutral-700" width="696" height="653"
                            viewBox="0 0 696 653" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="72.5" cy="29.5" r="29.5" fill="currentColor" />
                            <circle cx="171.5" cy="29.5" r="29.5" fill="currentColor" />
                            <circle cx="270.5" cy="29.5" r="29.5" fill="currentColor" />
                            <circle cx="369.5" cy="29.5" r="29.5" fill="currentColor" />
                            <circle cx="468.5" cy="29.5" r="29.5" fill="currentColor" />
                            <circle cx="567.5" cy="29.5" r="29.5" fill="currentColor" />
                            <circle cx="666.5" cy="29.5" r="29.5" fill="currentColor" />
                            <circle cx="29.5" cy="128.5" r="29.5" fill="currentColor" />
                            <circle cx="128.5" cy="128.5" r="29.5" fill="currentColor" />
                            <circle cx="227.5" cy="128.5" r="29.5" fill="currentColor" />
                            <circle cx="326.5" cy="128.5" r="29.5" fill="currentColor" />
                            <circle cx="425.5" cy="128.5" r="29.5" fill="currentColor" />
                            <circle cx="524.5" cy="128.5" r="29.5" fill="currentColor" />
                            <circle cx="623.5" cy="128.5" r="29.5" fill="currentColor" />
                            <circle cx="72.5" cy="227.5" r="29.5" fill="currentColor" />
                            <circle cx="171.5" cy="227.5" r="29.5" fill="currentColor" />
                            <circle cx="270.5" cy="227.5" r="29.5" fill="currentColor" />
                            <circle cx="369.5" cy="227.5" r="29.5" fill="currentColor" />
                            <circle cx="468.5" cy="227.5" r="29.5" fill="currentColor" />
                            <circle cx="567.5" cy="227.5" r="29.5" fill="currentColor" />
                            <circle cx="666.5" cy="227.5" r="29.5" fill="currentColor" />
                            <circle cx="29.5" cy="326.5" r="29.5" fill="currentColor" />
                            <circle cx="128.5" cy="326.5" r="29.5" fill="currentColor" />
                            <circle cx="227.5" cy="326.5" r="29.5" fill="currentColor" />
                            <circle cx="326.5" cy="326.5" r="29.5" fill="currentColor" />
                            <circle cx="425.5" cy="326.5" r="29.5" fill="currentColor" />
                            <circle cx="524.5" cy="326.5" r="29.5" fill="currentColor" />
                            <circle cx="623.5" cy="326.5" r="29.5" fill="currentColor" />
                            <circle cx="72.5" cy="425.5" r="29.5" fill="currentColor" />
                            <circle cx="171.5" cy="425.5" r="29.5" fill="currentColor" />
                            <circle cx="270.5" cy="425.5" r="29.5" fill="currentColor" />
                            <circle cx="369.5" cy="425.5" r="29.5" fill="currentColor" />
                            <circle cx="468.5" cy="425.5" r="29.5" fill="currentColor" />
                            <circle cx="567.5" cy="425.5" r="29.5" fill="currentColor" />
                            <circle cx="666.5" cy="425.5" r="29.5" fill="currentColor" />
                            <circle cx="29.5" cy="524.5" r="29.5" fill="currentColor" />
                            <circle cx="128.5" cy="524.5" r="29.5" fill="currentColor" />
                            <circle cx="227.5" cy="524.5" r="29.5" fill="currentColor" />
                            <circle cx="326.5" cy="524.5" r="29.5" fill="currentColor" />
                            <circle cx="425.5" cy="524.5" r="29.5" fill="currentColor" />
                            <circle cx="524.5" cy="524.5" r="29.5" fill="currentColor" />
                            <circle cx="623.5" cy="524.5" r="29.5" fill="currentColor" />
                            <circle cx="72.5" cy="623.5" r="29.5" fill="currentColor" />
                            <circle cx="171.5" cy="623.5" r="29.5" fill="currentColor" />
                            <circle cx="270.5" cy="623.5" r="29.5" fill="currentColor" />
                            <circle cx="369.5" cy="623.5" r="29.5" fill="currentColor" />
                            <circle cx="468.5" cy="623.5" r="29.5" fill="currentColor" />
                            <circle cx="567.5" cy="623.5" r="29.5" fill="currentColor" />
                            <circle cx="666.5" cy="623.5" r="29.5" fill="currentColor" />
                        </svg>
                    </div>
                    <!-- End SVG Element -->
                </div>
            </div>
            <!-- End Col -->

            <div>
                <!-- Blockquote -->
                <blockquote class="relative">


                    <div class="relative z-10">
                        <p class="text-xs font-semibold text-gray-900 tracking-wide uppercase mb-3 dark:text-neutral-900">
                            Featured client
                        </p>

                        <p
                            class="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-neutral-800">
                            The team at Mysha Khan LLC was professional and knowledgeable. They made the process of
                            furnishing our home stress-free.

                        </p>
                    </div>

                    <footer class="mt-6">
                        <div class="flex items-center">
                            <div class="md:hidden shrink-0">
                                <img class="size-12 rounded-full"
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                    alt="Avatar">
                            </div>
                            <div class="ms-4 md:ms-0">
                                <div class="text-base font-semibold text-gray-800 dark:text-neutral-900">Nicole Grazioso
                                </div>
                                <div class="text-xs text-gray-900 dark:text-neutral-600">Director Payments & Risk
                                </div>
                            </div>
                        </div>
                    </footer>

                    <div class="mt-8 lg:mt-14">
                        <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800"
                            href="#">
                            Read the story
                        </a>
                    </div>
                </blockquote>
                <!-- End Blockquote -->
            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </div>


    <!-- End Testimonials -->
    <div class=" bg-[#9E2829]">
        <div
            class="max-w-[110rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 mycol !text-white px-4 py-8 ">
            <!-- Shop Categories -->
            <div class="flex flex-col mb-6 sm:mb-0 items-start">
                <h2 class="font-bold text-lg mb-3 !text-white">Shop Categories</h2>
                <p class="mb-2 !text-white">Office Furniture</p>
                <p class="mb-2 !text-white">Home Office Furniture</p>
            </div>
            <!-- Useful Links -->
            <div class="flex flex-col mb-6 sm:mb-0 items-start">
                <h3 class="font-bold text-lg mb-3 !text-white">Useful Links</h3>
                <p class="mb-2 !text-white">Designs</p>
                <p class="mb-2 !text-white">Careers</p>
            </div>
            <!-- Account -->
            <div class="flex flex-col mb-6 sm:mb-0 items-start">
                <h3 class="font-bold text-lg mb-3 !text-white">Account</h3>
                <p class="mb-2 !text-white">Login</p>
                <p class="mb-2 !text-white">Cart</p>
            </div>
            <!-- About Company -->
            <div class="flex flex-col items-start">
                <h3 class="font-bold text-lg mb-3 !text-white">About Company</h3>
                <p class="mb-2 !text-white">Our Partners</p>
            </div>
            <!-- Get in Touch -->
            <div class="flex flex-col items-start">
                <h3 class="font-bold text-lg mb-3 !text-white text-center">Get in Touch</h3>
                <p class="mb-2 !text-white text-center">147 W 35th St, New York, NY 10001</p>
                <p class="mb-2 !text-white text-center">+1 (917) 6094-597</p>
                <p class="mb-2 !text-white text-center">
                    <a href="mailto:info@zemy-group.com" class="hover:text-gray-400">info@zemy-group.com</a>
                </p>
            </div>
        </div>
        <!-- Footer -->
        <footer class="mycol !text-white p-4 flex justify-center">
            <div class="container mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center">
                <div class="text-center md:text-left mb-4 md:mb-0">
                    <p class="text-sm mb-2 !text-white">&copy; 2024 Zemy Group LLC. All Rights Reserved.</p>
                    <p class="text-sm">
                        <a href="#" class="hover:text-gray-400 !text-white">Privacy Policy</a> |
                        <a href="#" class="hover:text-gray-400  !text-white">Terms of Service</a>
                    </p>
                </div>
                <div class="flex justify-center md:justify-end space-x-4">
                    <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import Navbar from '~/layouts/navbar.vue';
</script>

<style scoped>
.bg-custom-image {
    background-image: url('/hero-2.jpg');
}

.services {
    padding: 4rem 2rem;
    background-color: #f9f9f9;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.service-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.service-item {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    width: 300px;
}

.service-icon {
    max-width: 100px;
    height: auto;
    margin-bottom: 1rem;
}

h3 {
    margin: 1rem 0;
}

p {
    color: #555;
}

.featured-houses {
    padding: 4rem 2rem;
    background-color: #f9f9f9;
}

.search-bar {
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 2rem;
}

.search-bar .p-inputtext {
    width: 100%;
}

.mycol {
    background-color: rgb(158, 40, 41);
}
</style>