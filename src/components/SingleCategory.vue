<template>
    <div class="category">
        <div class="actions">
            <div class="title">
                <div v-if="!category.isEditing" @dblclick="startEditing">
                    <h3>{{category.title}}</h3>
                </div>
                <div v-if="category.isEditing" @keyup.enter="doneEditing" @keyup.esc="cancelEditing">
                    <input type="text" v-model="category.tempEdit">
                </div>
            </div>
            <div class="icons">
                <span class="material-icons" @click="startEditing" v-if="!category.isEditing">mode_edit</span>
                <span class="material-icons tick" v-if="category.isEditing" @click="doneEditing">done</span>
                <span class="material-icons" @click="dltCategory">delete</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'SingleCategory',
    props: ['category'],
    methods: {
        ...mapActions(['updateCategory', 'deleteCategory']),
        startEditing(){
            this.category.isEditing = true
            this.category.tempEdit = this.category.title
        },
        doneEditing(){
            this.category.title = this.category.tempEdit
            this.category.isEditing = false
            this.category.tempEdit = ''
        },
        cancelEditing(){
            this.category.tempEdit = ''
            this.category.isEditing = false
        },
        dltCategory(){
            this.deleteCategory(this.category.id)
        }
    }
}
</script>

<style scoped>
.category {
  margin-top: 20px;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.title, .icons {
  cursor: pointer;
}
.material-icons {
  margin: 15px 10px;
}

</style>