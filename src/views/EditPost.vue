<template>
    <form @submit.prevent="editPost">
        <div class="title">
            <label>Title</label>
            <input type="text" v-model="title">
        </div>
        <div class="description">
            <label>Description</label>
            <textarea v-model="description"></textarea>
        </div>
        <div class="categories">
            <label>Select category</label>
            <AddCategory/>
            <div v-for="category in allCategories" :key="category.id" class="category">
                {{category.title}}
                <input type="checkbox" name="category" :value="category" v-model="checks"><br>
            </div>
        </div>  
        <button type="submit">Update Post</button>
    </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddCategory from '@/components/AddCategory'

export default {
    name: 'EditPost',
    props: ['id'],
    components: {
        AddCategory
    },
    data(){
        return {
            title: '',
            description: '',
            checks: []
        }  
    },
    methods: {
        ...mapActions(['updatePost']),
        editPost(){
            const updPost = {
                id: this.id,
                title: this.title,
                description: this.description,
                categories: this.checks,
                showDetails: false
            }
            this.updatePost(updPost)
            this.$router.push('/')
        }
    },
    computed: {
        ...mapGetters(['allPosts', 'allCategories']),
    },
    mounted(){
        const post = this.allPosts.find(el => el.id === this.id)
        this.title = post.title
        this.description = post.description
        this.checks = post.categories
    }
}
</script>

<style>

</style>