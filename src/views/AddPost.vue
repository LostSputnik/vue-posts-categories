<template>
<div>
    <form @submit.prevent="addNewPost">
        <div class="title">
            <label>Title</label>
            <input type="text" v-model="title" required> 
        </div>
        <div class="description">
            <label>Description</label>
            <textarea v-model="description" required></textarea>
        </div>
        <div class="categories">
            <label>Select category</label>
            <AddCategory/>
            <div v-for="category in allCategories" :key="category.id" class="category">
                {{category.title}}
                <input type="checkbox" name="category" :value="category" v-model="checks"><br>
            </div>
        </div>  
        <div class="error" v-if="showError">
            Please select a category
        </div>
        <button type="submit">Add Post</button>
    </form>
</div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddCategory from '@/components/AddCategory.vue'

export default {
    name: 'AddPost',
    components: {
        AddCategory
    },
    data() {
        return {
            checks: [],
            title: '',
            description: '',
            showError: false
        }
    },
    methods: {
        ...mapActions(['addPost']),
        addNewPost(){
            if(!this.checks.length){
                this.showError = true
                return;
            }
            const newPost = {
                categories: this.checks,
                title: this.title,
                description: this.description,
                showDetails: false
            }
            this.addPost(newPost)

            this.title = ''
            this.description = ''
            this.checks = []

            this.$router.push('/')
        }
    },
    computed: {
        ...mapGetters(['allCategories'])
    }
}
</script>

<style >
form {
    background: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
}
label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}
input[type='text'] {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}
textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
}
form button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
}
.category {
    margin: 10px auto
}
.error {
    font-size: 12px;
    color: red;
}
</style>

