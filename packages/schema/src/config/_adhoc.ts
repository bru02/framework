export default {
  /**
   * Configure Nuxt component auto-registration.
   *
   * Any components in the directories configured here can be used throughout your
   * pages, layouts (and other components) without needing to explicitly import them.
   *
   * @default {{ dirs: [`~/components`] }}
   * @see [Nuxt 3](https://v3.nuxtjs.org/docs/directory-structure/components) and
   * [Nuxt 2](https://nuxtjs.org/docs/directory-structure/components/) documentation
   * @type {boolean | typeof import('../src/types/components').ComponentsOptions | typeof import('../src/types/components').ComponentsOptions['dirs']}
   */
  components: {
    $resolve: (val, get) => {
      if (!val) {
        // Nuxt 2 and Nuxt 3 have different default values when this option is not set,
        // so we defer to the module's own defaults here.
        return undefined
      }
      if (val === undefined || val === true) {
        return { dirs: ['~/components'] }
      }
      if (Array.isArray(val)) {
        return { dirs: val }
      }
      return val
    }
  },

  /**
   * Configure how Nuxt auto-imports composables into your application.
   *
   * @see [Nuxt 3 documentation](https://v3.nuxtjs.org/docs/directory-structure/composables)
   * @type {typeof import('../src/types/imports').AutoImportsOptions}
   */
  autoImports: {
    global: false,
    dirs: []
  },
}
