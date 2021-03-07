package main

import "github.com/gin-gonic/gin"

func setupRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/", base)
	r.GET("/ping", pong)
	return r
}

func main() {
	r := setupRouter()
	r.Run(":8080")
}

func base(c *gin.Context) {
	res := gin.H{"name": "xfinite-demo", "repository": "https://github.com/zachnewburgh/xfinite-demo/tree/main/go"}
	c.JSON(200, res)
}

func pong(c *gin.Context) {
	res := gin.H{"message": "pong"}
	c.JSON(200, res)
}
