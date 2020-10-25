<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="headerBox">
        <div class="logoBox">
          <a href="/"
            ><i
              data-v-869f6d7e=""
              class="logo-sspai logo-sspai"
              style="width: 101px; height: 36px"
            ></i
          ></a>
        </div>
        <div class="menuBox">
          <div class="menu" v-for="i in 5">
            <div class="matrix_menu">
              <i class="iconfont iconfont-matrix"></i
              ><span class="label" style="">Matrix 社区</span>
            </div>
            <div class="subMenu matrix">
              <div class="subItem iconHover">
                <i class="iconfont iconfont-group"></i
                ><span class="label">社区广场</span>
              </div>
              <i class="split-line"></i>
              <div class="subItem iconHover">
                <i data-v-13059630="" class="logo-yipai logo-yipai"></i
                ><!---->
              </div>
              <i class="split-line"></i>
            </div>
          </div>
        </div>
        <div class="userBox">
          <i class="iconfont iconfont-search"></i
          ><!---->
          <div class="placeholder placeholder-state">
            <div data-v-3a3524c3="" class="btn-box">
              <button
                data-v-3a3524c3=""
                type="button"
                class="el-button el-button--default is-round ss-default ss-small"
              >
                <!----><!----><span><!----><!---->登录</span>
              </button>
            </div>
            <!---->
          </div>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
import SearchBox from "@SearchBox";
export default {
  components: { SearchBox },
};
</script>

<style lang="stylus">
@import '~@app/style/config';

#header {
  width: 100%;
  background: #292525;
  position: fixed;
  z-index: 400;
  top: 0;
  left: 0;
  height: 60px;
  transition: all 0.5s;
}

.headerBox {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1120px;
  transition: all 0.5s;
  position: relative;

  .logoBox {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    line-height: 60px;

    a {
      color: #fff;

      .logo-sspai {
        display: inline-block;
        background: url('data:image/png;base64,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') no-repeat;
        background-size: contain;
        background-position: 50%;
        vertical-align: middle;
      }
    }
  }

  .menuBox {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    font-size: 0;
    height: 60px;
    line-height: 60px;

    .menu {
      color: #e5e5e5;
      font-size: 0;
      display: inline-block;
      cursor: pointer;
      position: relative;
      padding: 0 20px;

      .label {
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        vertical-align: middle;
        transition: color 0.2s;
      }

      .subMenu {
        position: fixed;
        left: 0;
        right: 0;
        top: 60px;
        height: 0;
        overflow: hidden;
        z-index: 98;
        font-weight: 500;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: rgba(41, 37, 37, 0.9);

        .subItem {
          height: 72px;
          line-height: 72px;
          padding: 0 20px;
          font-size: 14px;
          color: #fff;
          background: rgba(41, 37, 37, 0);
          transition: background 0.2s;

          .iconfont {
            color: #fff;
          }
        }

        .iconfont {
          font-size: 40px;
          width: 40px;
          height: 40px;
        }

        .split-line {
          display: inline-block;
          width: 0.5px;
          height: 30px;
          background: #655e5e;
          vertical-align: middle;

          &:last-child {
            display: none;
          }
        }
      }
    }
  }

  .userBox {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    .iconfont-close, .iconfont-menu, .iconfont-search {
      cursor: pointer;
      display: inline-block;
      font-size: 32px;
      width: 32px;
      height: 32px;
      color: #e5e5e5;
      margin-right: 24px;
    }

    .placeholder {
      max-width: 92px;
      display: inline-block;
      vertical-align: middle;
      max-width: 0;
      white-space: nowrap;
      transition: all 0.3s;
    }

    .placeholder-state {
      max-width: 92px;
    }
  }
}

.iconfont {
  font-size: 24px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 4px;
  transition: color 0.2s;
}

.logo-yipai {
  display: inline-block;
  background: url('https://post.sspai.com/sspai-ui@1.17.38/img/yipai_white.b7eba4b3.png') no-repeat;
  background-size: contain;
  background-position: 50%;
  width: 90.25px;
  height: 40px;
  vertical-align: middle;
}

.btn-box {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;

  button {
    display: inline-block;
    background: #171514;
    color: #cac3c3;
    margin: 0;
    padding: 5px 12px;
    border-radius: 24px;
    border: none;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0.1em;
    white-space: nowrap;
    cursor: pointer;
    box-sizing: border-box;
    transition: 0.1s;
  }
}
</style>
