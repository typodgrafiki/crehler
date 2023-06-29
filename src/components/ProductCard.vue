<template>
    <div class="product col-12 col-sm-6 col-md-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><slot name="name"></slot></h5>
                <p class="card-text"><slot></slot></p>
                <div class="price"><slot name="price"></slot></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card
    {
        height: 100%;  
    }
    
    .card-text 
    {
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        line-clamp: 7;
        overflow: hidden;
    }
    
    .price
    {
        color: brown;
        font-weight: 700;
    }
</style>
