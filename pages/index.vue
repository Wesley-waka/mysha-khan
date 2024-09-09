<template>
  <Navbar />
  <div class="bg-custom-image bg-cover bg-center h-screen text-white bg-transparent ">
    <div class="mx-auto px-4 bg-custom-image bg-cover bg-center h-screen">

    </div>


    <section class="featured-houses">
      <h3 class="flex justify-center font-bold">Featured Houses</h3>
      <div class="search-bar">
        <InputText v-model="searchQuery" placeholder="Search houses..." class="w-full" />
      </div>

      <!-- done -->
      <div class="flex flex-wrap gap-4 justify-center mt-4">
        <Card v-for="house in filteredHouses" :key="house.id" style="width: 25rem; overflow: hidden">
          <template #header>
            <img :alt="house.title" :src="house.image" />
          </template>
          <template #title>{{ house.title }}</template>
          <template #subtitle>{{ house.location }}</template>
          <template #content>
            <p class="m-0">{{ house.description }}</p>
          </template>
          <template #footer>
            <div class="flex gap-4 mt-1">
              <Button label="More Details" class="w-full mycol" @click="openModal(house)" />
            </div>
          </template>
        </Card>
      </div>
    </section>

    <div class="flex flex-col md:flex-row p-4 gap-4 justify-center">
      <section class="services w-full">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Services</h3>
        <div class="flex flex-col md:flex-row p-4 gap-4 justify-center">
          <Card v-for="service in services" :key="service.id" class="w-full md:w-80 lg:w-96 overflow-hidden"
            @click="openModal(service)">
            <template #header>
              <img :alt="service.title" :src="service.image" class="w-full h-48 object-cover" />
            </template>
            <template #title>
              <h4 class="text-xl font-semibold">{{ service.title }}</h4>
            </template>
            <template #subtitle>
              <h5 class="text-lg font-medium">{{ service.subtitle }}</h5>
            </template>
            <template #content>
              <p class="m-0">{{ service.description }}</p>
            </template>
            <template #footer>
              <div class="flex gap-4 mt-1">
                <Button label="View" class="w-full mycol" @click="openModal(service)" />
              </div>
            </template>
          </Card>
        </div>

        <!-- Dialog Modal -->
        <Dialog v-model:visible="visible" modal header="Service Details" :style="{ width: '90%', maxWidth: '600px' }">
          <img :src="selectedService.image" alt="Service Image" class="w-full mb-4 h-48 object-cover" />
          <h3 class="text-2xl font-bold">{{ selectedService.title }}</h3>
          <h4 class="text-xl font-medium">{{ selectedService.subtitle }}</h4>
          <p>{{ selectedService.description }}</p>
          <div class="flex justify-end gap-2 mt-4">
            <Button type="button" label="Close" severity="secondary" @click="visible = false" />
          </div>
        </Dialog>
      </section>
    </div>


    <div class="pb-8">
      <section class="testimonials">
        <h2 class="text-center mb-4">What Our Clients Say</h2>
        <div class="flex flex-wrap gap-4 justify-center">
          <Card v-for="testimonial in testimonials" :key="testimonial.name" style="width: 20rem; overflow: hidden"
            class="testimonial-card">
            <template #header>
              <img :src="testimonial.image" alt="Client Photo" class="testimonial-image" />
            </template>
            <template #title>{{ testimonial.name }}</template>
            <template #subtitle>{{ testimonial.position }}</template>
            <template #content>
              <p class="m-0">"{{ testimonial.message }}"</p>
            </template>
            <template #footer>
              <div class="flex justify-end">
                <i class="pi pi-quote-right"></i>
              </div>
            </template>
          </Card>
        </div>
      </section>
    </div>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 mycol !text-white px-4 py-8">
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
import { ref, computed } from 'vue';
import Navbar from '~/layouts/navbar.vue';

const visible = ref(false);
const isMenuOpen = ref(false);
const selectedService = ref({});
const searchQuery = ref('');

const openModal = (service) => {
  selectedService.value = service;
  visible.value = true;
}

const testimonials = [
  {
    name: 'Jane Doe',
    position: 'CEO, Company A',
    message: 'This service was fantastic! It exceeded all our expectations.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'John Smith',
    position: 'Marketing Director, Company B',
    message: 'Absolutely brilliant experience. Highly recommend to everyone!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Alice Johnson',
    position: 'Product Manager, Company C',
    message: 'Professional and efficient. The results speak for themselves.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Bob Brown',
    position: 'Software Engineer, Company D',
    message: 'A top-notch service that delivered exactly what we needed.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const services = [
  {
    id: 1,
    title: 'Property Management',
    subtitle: 'Find a house to rent',
    description: 'Comprehensive management of rental properties including maintenance and tenant relations.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg',
  },
  {
    id: 2,
    title: 'Tenant Placement',
    subtitle: 'Find a house to rent',
    description: 'Finding and placing qualified tenants for your rental properties.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
  },
  {
    id: 3,
    title: 'Market Analysis',
    subtitle: 'Find a house to rent',
    description: 'Detailed market analysis to help you set competitive rental prices and attract more tenants.',
    image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg',
  },
];

const houses = [
  {
    id: 1,
    title: 'Cozy Cottage',
    location: 'New York',
    description: 'A charming cottage in the heart of New York City.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
  {
    id: 2,
    title: 'Modern Apartment',
    location: 'San Francisco',
    description: 'A modern apartment with stunning city views.',
    image: 'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg',
  },
  {
    id: 3,
    title: 'Spacious Villa',
    location: 'Los Angeles',
    description: 'A spacious villa with a large garden.',
    image: 'https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg',
  },
  {
    id: 4,
    title: 'Chic Studio',
    location: 'Chicago',
    description: 'A chic studio in the vibrant city of Chicago.',
    image: 'https://images.pexels.com/photos/8082559/pexels-photo-8082559.jpeg',
  },
  {
    id: 5,
    title: 'Chic Studio',
    location: 'Chicago',
    description: 'A chic studio in the vibrant city of Chicago.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
  {
    id: 6,
    title: 'Chic Studio',
    location: 'Chicago',
    description: 'A chic studio in the vibrant city of Chicago.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
];

const filteredHouses = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return houses.filter(house =>
    house.title.toLowerCase().includes(query) ||
    house.location.toLowerCase().includes(query) ||
    house.description.toLowerCase().includes(query)
  );
});
</script>

<style scoped>
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