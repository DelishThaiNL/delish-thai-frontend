<template>
  <section class="max-w-4xl mx-auto p-6 text-gray-800">
    <h1 class="text-2xl font-bold mb-4">{{ $t('privacy.title') }}</h1>

    <p class="mb-4">{{ $t('privacy.intro') }}</p>

    <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.data.title') }}</h2>
    <ul class="list-disc pl-6 space-y-1">
      <li>{{ $t('privacy.data.name') }}</li>
      <li>{{ $t('privacy.data.email') }}</li>
      <li>{{ $t('privacy.data.phone') }}</li>
      <li>{{ $t('privacy.data.age') }}</li>
      <li>{{ $t('privacy.data.history') }}</li>
    </ul>

    <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.why.title') }}</h2>
    <ul class="list-disc pl-6 space-y-1">
      <li>{{ $t('privacy.why.news') }}</li>
      <li>{{ $t('privacy.why.promotions') }}</li>
      <li>{{ $t('privacy.why.membership') }}</li>
    </ul>

    <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.consent.title') }}</h2>
    <p class="mb-4">{{ $t('privacy.consent.text') }}</p>

    <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.storage.title') }}</h2>
    <p class="mb-4">{{ $t('privacy.storage.text') }}</p>

    <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.security.title') }}</h2>
    <p class="mb-4">{{ $t('privacy.security.text') }}</p>

    <h2 class="text-xl font-semibold mt-6 mb-2">{{ $t('privacy.rights.title') }}</h2>
    <p class="mb-2">{{ $t('privacy.rights.text') }}</p>
    <p>
      {{ $t('privacy.rights.contact') }}
      <a href="mailto:info@delishthai.nl" class="text-blue-600 underline">info@delishthai.nl</a>
    </p>
  </section>
</template>
