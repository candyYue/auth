<template>
  <div>
    <AuthStatusBar/>

    <div>名片认证步骤：</div>

    <el-form ref="authForm" :model="authForm" :rules="rules" @submit.native.prevent label-width="120px">
      <h3>来电显示信息</h3>

      <el-form-item label="企业名称" prop="name">
        <el-input v-model="authForm.name"></el-input>
      </el-form-item>

      <el-form-item label="总机号">
        {{authForm.switchNumber}}
      </el-form-item>

      <el-form-item label="直线号码" prop="lineNumber">
        <div v-if="lineNumberSelected.length">
          <!-- <span v-for="item in data" :key="item.key">
            {{ item.label }}
          </span> -->
          <span>{{authForm.lineNumber}}</span>
          <el-button type="primary" @click="addNumber">修改直线号码</el-button>
        </div>
        <div v-else>
          <el-button type="primary" @click="addNumber">点击添加直线号码</el-button>
        </div>
      </el-form-item>

      <!-- 添加直线号码弹框 start -->
      <el-dialog title="添加直线号码" :visible="addNumberDialog" :close-on-press-escape="false" :close-on-click-modal="false">
        <el-transfer v-model="lineNumberList" :titles="['全部', '全部']" :data="allLineNumber">
        </el-transfer>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addNumberDialog = false">取 消</el-button>
          <el-button type="primary" @click="addNumberComfirm">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 添加直线号码弹框 end -->

      
      <el-form-item label="企业宣传语" prop="slogan">
        <el-input type="textarea" v-model="authForm.slogan" placeholder="请输入企业宣传语，20字以内"></el-input>
      </el-form-item>

      <el-form-item label="短信通知">
        <el-input v-model="authForm.tel"></el-input> 企业名片认证后，将对所输入的号码发送短信通知。
      </el-form-item>

      <h3>资质信息</h3>
      <el-form-item label="企业名称" prop="fullName">
        <el-input v-model="authForm.fullName" placeholder="请输入企业完整名称，35字以内"></el-input>
      </el-form-item>


      <el-form-item label="企业证件" prop="CompanyCertificate">
        <el-select v-model="authForm.CompanyCertificate">
          <el-option label="营业执照" value="营业执照"></el-option>
          <el-option label="组织机构代码证" value="组织机构代码证"></el-option>
          <el-option label="律师事务所执行许可证" value="律师事务所执行许可证"></el-option>
          <el-option label="非盈利性医疗机构执业许可证" value="非盈利性医疗机构执业许可证"></el-option>
          <el-option label="中华人民共和国民办学校办学许可证" value="中华人民共和国民办学校办学许可证"></el-option>
        </el-select>
        如使用营业执照请上传“最新营业执照”或有“2012年年检章的营业执照”
      </el-form-item>
      <el-form-item label="企业证件号码" prop="CompanyCertificateId">
        <el-input v-model="authForm.CompanyCertificateId " placeholder="6~30位数字与字母组合"></el-input>
      </el-form-item>

      <el-form-item label="企业负责人" prop="manager">
        <el-select v-model="authForm.manager">
          <el-option label="企业法人" value="企业法人"></el-option>
          <el-option label="企业运营者" value="企业运营者"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="负责人证件" prop="managerCertificate">
        <el-select v-model="authForm.managerCertificate">
          <el-option label="大陆居民身份证" value="大陆居民身份证"></el-option>
          <el-option label="港澳台居民身份证" value="港澳台居民身份证"></el-option>
          <el-option label="护照" value="护照"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="负责人证件号码" prop="managerCertificateId">
        <el-input v-model="authForm.managerCertificateId " placeholder="2~30位数字与字母组合"></el-input>
      </el-form-item>

      <el-form-item label="负责人姓名" prop="managerName">
        <el-input v-model="authForm.managerName " placeholder="请输入负责人姓名"></el-input>
      </el-form-item>
      <el-form-item label="其他资质">
      </el-form-item>
      <el-form-item label="联系方式" prop="contact">
        <el-input v-model="authForm.contact " placeholder="请输入联系方式"></el-input>
      </el-form-item>

      <el-form-item>
        <el-checkbox name="type">阅读并同意</el-checkbox>
        <a @click="serviceDialog=true" class="link" href="javascript:;">《服务协议》</a>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :disabled="comfirmBtnDisabled" @click="onSubmit" >提交认证</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>


    <!-- 服务协议弹框 -->
    <el-dialog title="服务协议" :visible="serviceDialog" :close-on-press-escape="false" :close-on-click-modal="false" :show-close="false">
      欢迎使用沃·云总机360可信认证服务！ 沃·云总机360可信认证平台针对商家（定义见下文）所提供的各项服务的所有权和经营权均归南京易米云通网络科技有限公司（以下简称“易米云通”）所有。沃·云总机360可信认证服务协议（以下简称“本协议”）系由沃·云总机360可信认证平台商家与易米云通就沃·云总机360可信认证服务的各项内容所订立的相关权利义务规范。沃·云总机360可信认证平台商家通过注册并使用沃·云总机360可信认证平台提供的服务，即表示接受并同意本协议的所有条件和条款。
      如商家不同意本协议及/或易米云通随时对其的修改或补充内容，商家应不使用或主动取消沃·云总机提供的服务；商家的使用行为或接受沃·云总机360可信认证平台提供的任何服务将被视为商家对本协议条款全部内容的完全接受，包括接受易米云通对本协议条款随时所做的任何修改和补充。本协议内容包括协议正文及所有沃·云总机360可信认证平台已经发布的或将来可能发布的各类规则。所有规则为协议不可分割的一部分，与协议正文具有同等法律效力。
      1. 重要定义 1.1. 用户：特指360手机卫士（具备来电秀功能）产品的用户、360免费电话产品的用户和360搜索用户。 1.2. 沃·云总机360可信认证平台：是指沃·云总机应用平台与360合作的可为商家提供号码标记服务的平台。
      1.3. 沃·云总机360可信认证平台商家（以下简称“商家”）：是指通过沃·云总机360可信认证平台商家审核后，使用沃·云总机360可信认证平台商家服务的公司、单位及其他组织机构。 1.4. 沃·云总机360可信认证平台商家服务（以下简称“商家服务”）：是指沃·云总机360可信认证平台为商家提供的信息展示服务。
      1.5. 基础服务：是指商家的基础信息经沃·云总机360可信认证平台审核通过后，商家向360手机卫士（具备来电秀功能）用户打电话时向用户展示商家的基础信息。在360手机卫士来电秀功能中展示的商家基础信息为商家的名称、电话、LOGO及宣传语。
      2. 商家服务申请条件 2.1. 沃·云总机360可信认证平台提供的商家服务仅供具有合法经营资质的公司、单位及其他组织机构使用。无论是普通商家还是邀请制商家，都应当根据申请页面或易米云通的要求提交相应的经营资质证明。仅有在沃·云总机对商家提交的全部资料审核通过后，商家方可成为本协议的一方，本协议方可生效。否则，商家将不具备使用商家服务的主体资格。如商家违反沃·云总机360可信认证平台的任何协议或规则或沃·云总机认为其有违法、不当行为，沃·云总机可随时自行全权决定拒绝向商家提供商家服务，必要时将移交有关机关处理。“商家服务”不会提供给被暂时或永久中止资格的沃·云总机360可信认证平台商家或已被中止或终止商家资格后，再一次直接或间接或以他人名义注册为沃·云总机360可信认证平台的商家。。。。

      <span slot="footer" class="dialog-footer">
        <el-button @click="serviceDialog = false">关闭</el-button>
      </span>
    </el-dialog>
    <!-- 取消认证 -->
    <el-dialog title="取消认证" :visible="concelDialog" :close-on-press-escape="false" :close-on-click-modal="false" :show-close="false">
      <span>

        您的认证信息还没有完成，继续认证可以将您的企业信息 呈现在被叫用户的手机上。避免被错误标记
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="concelDialog = false">继续认证</el-button>
        <el-button>
          <router-link :to="{name:'SAuthenticate'}">取消认证</router-link>
        </el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { authRules } from "@/utils/rules";
import AuthStatusBar from "@/components/authenticate/AuthStatusBar";
export default {
  name: "auth-edit",
  components: {
    AuthStatusBar
  },
  data() {
    return {
      status: 0,
      comfirmBtnDisabled: true,
      addNumberDialog: false,
      serviceDialog: false,
      concelDialog: false,
      contact: "",
      allLineNumber: [
        // 所有直线号码
        {
          key: 1,
          label: "025-88888888"
        },
        {
          key: 2,
          label: "025-88888888"
        },
        {
          key: 3,
          label: "025-88888888"
        }
      ],
      lineNumberList: [], // 选中的直线号码key Arry
      authForm: {
        name: "易米云通",
        switchNumber: "025-66699808",
        lineNumber: "",
        slogan: "",
        tel: "",
        fullName: "",
        CompanyCertificate: "营业执照",
        CompanyCertificateId: "",
        manager: "企业法人",
        managerCertificate: "大陆居民身份证",
        contact: ""
      },
      rules: authRules
    };
  },
  computed: {
    lineNumberSelected: {
      get() {
        return this.authForm.lineNumber.split(",").slice(1);
      },
      set(newValue) {
        this.authForm.lineNumber = newValue.toString();
      }
    }
  },
  methods: {
    addNumber() {
      console.log(this.lineNumberList);
      this.addNumberDialog = true;
    },
    addNumberComfirm() {
      console.log(this.lineNumberList);
      this.lineNumberSelected = this.lineNumberList;
      this.addNumberDialog = false;
    },
    onSubmit() {
      this.$alert(
        "感谢您提交的信息，我们已经收到您的认证，我们会在3个工作日内完成审核。审核通过后，企业信息将在被叫用户手机上展示。",
        "提交成功",
        {
          showClose: false,
          confirmButtonText: "我知道了"
        }
      );
    },
    onCancel() {
      this.$confirm("您的认证信息还没有完成，继续认证可以将您的企业信息呈现在被叫用户的手机上。避免被错误标记。", "取消认证", {
        showClose: false,
        cancelButtonText: "取消认证",
        confirmButtonText: "继续认证"
      });
    }
  },
  mounted() {
    this.lineNumberList = this.lineNumberSelected;
  }
};
</script>

<style scoped lang="scss">

</style>
