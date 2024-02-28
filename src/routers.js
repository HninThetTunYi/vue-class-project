import { createRouter, createWebHistory } from "vue-router";

import DictionaryView from './views/DictionaryView.vue';
import CourseList from './views/CourseList.vue';
import CourseDetail from './views/CourseDetail.vue';

import TeacherList from './views/TeacherList.vue';

const routes = [
    { path: '/DictionaryView', component: DictionaryView },
    { path: '/DictionaryView', component: DictionaryView },
    { path: '/CourseList', component: CourseList },
    { path: '/course/:id', component: CourseDetail },
    { path: '/TeacherList', component: TeacherList }
  ];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;