const routes = [
  {
    path: '/', component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/IndexPage.vue') },
      { path: 'chat', name:'Chat', component: () => import('pages/AdminChat.vue')},
      { path: 'message', name: 'Message', component: () => import('pages/AdminMessages.vue')},
      { path: 'inquiry', name: 'Inquiry' , component: () => import('pages/AdminInquiry.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
