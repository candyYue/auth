/**
 * 表单校验规则
 */
export const authRules = {
  name: [
    {
      required: true,
      message: "请输入企业名称",
      trigger: "blur"
    },
    {
      max: 11,
      message: "最多输入11位字符",
      trigger: "change"
    }
  ],
  slogan: [{
    max: 20,
    message: "宣传语在20字以内",
    trigger: "change"
  }],
  tel: [
    {
      max: 11,
      message: "请输入正确的联系方式",
      trigger: "change"
    }
  ],
  fullName: [
    {
      required: true,
      message: "请输入企业完整名称",
      trigger: "blur"
    },
    {
      max: 35,
      message: "最多输入35位字符",
      trigger: "change"
    }
  ],
  CompanyCertificate: [
    {
      required: true
    }
  ],
  CompanyCertificateId: [
    {
      required: true,
      message: "请输入企业证件号码",
      trigger: "blur"
    },
    {
      min: 6,
      max: 30,
      message: "企业证件号码为6~30位数字与字母组合",
      trigger: "change"
    }
  ],
  manager: [
    {
      required: true
    }
  ],
  managerCertificate: [
    {
      required: true
    }
  ],
  managerCertificateId: [
    {
      required: true,
      message: "请输入负责人证件号码",
      trigger: "blur"
    },
    {
      min: 6,
      max: 30,
      message: "负责人证件号码为2~30位数字与字母组合",
      trigger: "change"
    }
  ],
  managerName: [
    {
      required: true,
      message: "请输入负责人姓名",
      trigger: "blur"
    }
  ],
  contact: [
    {
      required: true,
      message: "请输入联系方式",
      trigger: "blur"
    },
    {
      max: 11,
      message: "请输入正确的联系方式",
      trigger: "change"
    }
  ]
}
