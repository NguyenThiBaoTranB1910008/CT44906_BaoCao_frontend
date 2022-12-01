<script>
    export default{
        props:{
            searchText: {type: String, default: ""},
        },
        methods:{
            updateModelValue(e){
                this.$emit("updateModelValue", e.target.value);
            },
            submit(){
                this.$emit("submit");
            },
        },
    };
</script>

<template>
    <div class="input-group">
        <i class="fa-solid fa-magnifying-glass" @click="submit"></i>
        <input 
            type="text"
            class="form-control"
            placeholder="Nhập thông tin cần tìm"
            @input="updateModelValue($event)"
            @keyup.enter="submit" />
        <!-- <div class="input-group-append"> -->
            <!-- <button 
                class="btn btn-outline-secondary"
                type="button"
                @click="submit">
                <i class="fas fa-search"></i>Tìm kiếm
            </button> -->
        <!-- </div> -->
    </div>
</template>    