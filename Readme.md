# Maven-Repo

> 此仓库作为 312Hz 的公共云 maven 仓库，任何打包好的依赖文件会上传到此处

## 可视化仓库

直接访问: `https://312Hz.github.io/maven-repository`



## 仓库配置

### maven

```xml
<repository>
    <id>312Hz-releases</id>
    <name>312Hz Repository</name>
    <url>https://312hz.github.io/maven-repository</url>
</repository>
```

### gradle

```
maven "https://312hz.github.io/maven-repository"
```

```kotlin
maven("https://312hz.github.io/maven-repository")
```

