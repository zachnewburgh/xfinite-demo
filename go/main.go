package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.GET("/", home)
	r.GET("/ping", pong)
	r.Run()
}

func home(c *gin.Context) {
	res := gin.H{"name": "xfinite-demo", "repository": "https://github.com/zachnewburgh/xfinite-demo/tree/main/go"}
	c.JSON(200, res)
}

func pong(c *gin.Context) {
	res := gin.H{"message": "pong"}
	c.JSON(200, res)
}
