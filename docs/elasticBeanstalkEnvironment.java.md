# `elasticBeanstalkEnvironment` Submodule <a name="`elasticBeanstalkEnvironment` Submodule" id="@cdktn/provider-aws.elasticBeanstalkEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkEnvironment <a name="ElasticBeanstalkEnvironment" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment aws_elastic_beanstalk_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironment;

ElasticBeanstalkEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .application(java.lang.String)
    .name(java.lang.String)
//  .cnamePrefix(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .platformArn(java.lang.String)
//  .pollInterval(java.lang.String)
//  .region(java.lang.String)
//  .setting(IResolvable|java.util.List<ElasticBeanstalkEnvironmentSetting>)
//  .solutionStackName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .templateName(java.lang.String)
//  .tier(java.lang.String)
//  .versionLabel(java.lang.String)
//  .waitForReadyTimeout(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.application">application</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.cnamePrefix">cnamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.platformArn">platformArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.pollInterval">pollInterval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.setting">setting</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>></code> | setting block. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.templateName">templateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.versionLabel">versionLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.waitForReadyTimeout">waitForReadyTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.application"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}.

---

##### `cnamePrefix`<sup>Optional</sup> <a name="cnamePrefix" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.cnamePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platformArn`<sup>Optional</sup> <a name="platformArn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.platformArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}.

---

##### `pollInterval`<sup>Optional</sup> <a name="pollInterval" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.pollInterval"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#region ElasticBeanstalkEnvironment#region}

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.setting"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>>

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#setting ElasticBeanstalkEnvironment#setting}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.solutionStackName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}.

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.templateName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}.

---

##### `versionLabel`<sup>Optional</sup> <a name="versionLabel" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.versionLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}.

---

##### `waitForReadyTimeout`<sup>Optional</sup> <a name="waitForReadyTimeout" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.waitForReadyTimeout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting">putSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetCnamePrefix">resetCnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPlatformArn">resetPlatformArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPollInterval">resetPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSetting">resetSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSolutionStackName">resetSolutionStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTemplateName">resetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetVersionLabel">resetVersionLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetWaitForReadyTimeout">resetWaitForReadyTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSetting` <a name="putSetting" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting"></a>

```java
public void putSetting(IResolvable|java.util.List<ElasticBeanstalkEnvironmentSetting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>>

---

##### `resetCnamePrefix` <a name="resetCnamePrefix" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetCnamePrefix"></a>

```java
public void resetCnamePrefix()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetPlatformArn` <a name="resetPlatformArn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPlatformArn"></a>

```java
public void resetPlatformArn()
```

##### `resetPollInterval` <a name="resetPollInterval" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPollInterval"></a>

```java
public void resetPollInterval()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSetting` <a name="resetSetting" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSetting"></a>

```java
public void resetSetting()
```

##### `resetSolutionStackName` <a name="resetSolutionStackName" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSolutionStackName"></a>

```java
public void resetSolutionStackName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTemplateName"></a>

```java
public void resetTemplateName()
```

##### `resetTier` <a name="resetTier" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTier"></a>

```java
public void resetTier()
```

##### `resetVersionLabel` <a name="resetVersionLabel" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetVersionLabel"></a>

```java
public void resetVersionLabel()
```

##### `resetWaitForReadyTimeout` <a name="resetWaitForReadyTimeout" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetWaitForReadyTimeout"></a>

```java
public void resetWaitForReadyTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticBeanstalkEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironment;

ElasticBeanstalkEnvironment.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironment;

ElasticBeanstalkEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironment;

ElasticBeanstalkEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironment;

ElasticBeanstalkEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticBeanstalkEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticBeanstalkEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticBeanstalkEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticBeanstalkEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticBeanstalkEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.allSettings">allSettings</a></code> | <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList">ElasticBeanstalkEnvironmentAllSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.autoscalingGroups">autoscalingGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cname">cname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.launchConfigurations">launchConfigurations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.loadBalancers">loadBalancers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.queues">queues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.setting">setting</a></code> | <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList">ElasticBeanstalkEnvironmentSettingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.triggers">triggers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.applicationInput">applicationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefixInput">cnamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArnInput">platformArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollIntervalInput">pollIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.settingInput">settingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackNameInput">solutionStackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabelInput">versionLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeoutInput">waitForReadyTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.application">application</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefix">cnamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArn">platformArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollInterval">pollInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabel">versionLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeout">waitForReadyTimeout</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allSettings`<sup>Required</sup> <a name="allSettings" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.allSettings"></a>

```java
public ElasticBeanstalkEnvironmentAllSettingsList getAllSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList">ElasticBeanstalkEnvironmentAllSettingsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoscalingGroups`<sup>Required</sup> <a name="autoscalingGroups" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.autoscalingGroups"></a>

```java
public java.util.List<java.lang.String> getAutoscalingGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cname"></a>

```java
public java.lang.String getCname();
```

- *Type:* java.lang.String

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.endpointUrl"></a>

```java
public java.lang.String getEndpointUrl();
```

- *Type:* java.lang.String

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `launchConfigurations`<sup>Required</sup> <a name="launchConfigurations" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.launchConfigurations"></a>

```java
public java.util.List<java.lang.String> getLaunchConfigurations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.loadBalancers"></a>

```java
public java.util.List<java.lang.String> getLoadBalancers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queues`<sup>Required</sup> <a name="queues" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.queues"></a>

```java
public java.util.List<java.lang.String> getQueues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.setting"></a>

```java
public ElasticBeanstalkEnvironmentSettingList getSetting();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList">ElasticBeanstalkEnvironmentSettingList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.triggers"></a>

```java
public java.util.List<java.lang.String> getTriggers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.applicationInput"></a>

```java
public java.lang.String getApplicationInput();
```

- *Type:* java.lang.String

---

##### `cnamePrefixInput`<sup>Optional</sup> <a name="cnamePrefixInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefixInput"></a>

```java
public java.lang.String getCnamePrefixInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `platformArnInput`<sup>Optional</sup> <a name="platformArnInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArnInput"></a>

```java
public java.lang.String getPlatformArnInput();
```

- *Type:* java.lang.String

---

##### `pollIntervalInput`<sup>Optional</sup> <a name="pollIntervalInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollIntervalInput"></a>

```java
public java.lang.String getPollIntervalInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `settingInput`<sup>Optional</sup> <a name="settingInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.settingInput"></a>

```java
public IResolvable|java.util.List<ElasticBeanstalkEnvironmentSetting> getSettingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>>

---

##### `solutionStackNameInput`<sup>Optional</sup> <a name="solutionStackNameInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackNameInput"></a>

```java
public java.lang.String getSolutionStackNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `versionLabelInput`<sup>Optional</sup> <a name="versionLabelInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabelInput"></a>

```java
public java.lang.String getVersionLabelInput();
```

- *Type:* java.lang.String

---

##### `waitForReadyTimeoutInput`<sup>Optional</sup> <a name="waitForReadyTimeoutInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeoutInput"></a>

```java
public java.lang.String getWaitForReadyTimeoutInput();
```

- *Type:* java.lang.String

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.application"></a>

```java
public java.lang.String getApplication();
```

- *Type:* java.lang.String

---

##### `cnamePrefix`<sup>Required</sup> <a name="cnamePrefix" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefix"></a>

```java
public java.lang.String getCnamePrefix();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platformArn`<sup>Required</sup> <a name="platformArn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArn"></a>

```java
public java.lang.String getPlatformArn();
```

- *Type:* java.lang.String

---

##### `pollInterval`<sup>Required</sup> <a name="pollInterval" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollInterval"></a>

```java
public java.lang.String getPollInterval();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `solutionStackName`<sup>Required</sup> <a name="solutionStackName" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackName"></a>

```java
public java.lang.String getSolutionStackName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `versionLabel`<sup>Required</sup> <a name="versionLabel" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabel"></a>

```java
public java.lang.String getVersionLabel();
```

- *Type:* java.lang.String

---

##### `waitForReadyTimeout`<sup>Required</sup> <a name="waitForReadyTimeout" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeout"></a>

```java
public java.lang.String getWaitForReadyTimeout();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkEnvironmentAllSettings <a name="ElasticBeanstalkEnvironmentAllSettings" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironmentAllSettings;

ElasticBeanstalkEnvironmentAllSettings.builder()
    .build();
```


### ElasticBeanstalkEnvironmentConfig <a name="ElasticBeanstalkEnvironmentConfig" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironmentConfig;

ElasticBeanstalkEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .application(java.lang.String)
    .name(java.lang.String)
//  .cnamePrefix(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .platformArn(java.lang.String)
//  .pollInterval(java.lang.String)
//  .region(java.lang.String)
//  .setting(IResolvable|java.util.List<ElasticBeanstalkEnvironmentSetting>)
//  .solutionStackName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .templateName(java.lang.String)
//  .tier(java.lang.String)
//  .versionLabel(java.lang.String)
//  .waitForReadyTimeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.application">application</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.cnamePrefix">cnamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.platformArn">platformArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.pollInterval">pollInterval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.setting">setting</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>></code> | setting block. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.templateName">templateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.versionLabel">versionLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.waitForReadyTimeout">waitForReadyTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.application"></a>

```java
public java.lang.String getApplication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}.

---

##### `cnamePrefix`<sup>Optional</sup> <a name="cnamePrefix" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.cnamePrefix"></a>

```java
public java.lang.String getCnamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platformArn`<sup>Optional</sup> <a name="platformArn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.platformArn"></a>

```java
public java.lang.String getPlatformArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}.

---

##### `pollInterval`<sup>Optional</sup> <a name="pollInterval" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.pollInterval"></a>

```java
public java.lang.String getPollInterval();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#region ElasticBeanstalkEnvironment#region}

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.setting"></a>

```java
public IResolvable|java.util.List<ElasticBeanstalkEnvironmentSetting> getSetting();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>>

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#setting ElasticBeanstalkEnvironment#setting}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.solutionStackName"></a>

```java
public java.lang.String getSolutionStackName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}.

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}.

---

##### `versionLabel`<sup>Optional</sup> <a name="versionLabel" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.versionLabel"></a>

```java
public java.lang.String getVersionLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}.

---

##### `waitForReadyTimeout`<sup>Optional</sup> <a name="waitForReadyTimeout" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.waitForReadyTimeout"></a>

```java
public java.lang.String getWaitForReadyTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}.

---

### ElasticBeanstalkEnvironmentSetting <a name="ElasticBeanstalkEnvironmentSetting" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.Initializer"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironmentSetting;

ElasticBeanstalkEnvironmentSetting.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .value(java.lang.String)
//  .resource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#namespace ElasticBeanstalkEnvironment#namespace}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#value ElasticBeanstalkEnvironment#value}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.resource">resource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#resource ElasticBeanstalkEnvironment#resource}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#namespace ElasticBeanstalkEnvironment#namespace}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#value ElasticBeanstalkEnvironment#value}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elastic_beanstalk_environment#resource ElasticBeanstalkEnvironment#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkEnvironmentAllSettingsList <a name="ElasticBeanstalkEnvironmentAllSettingsList" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironmentAllSettingsList;

new ElasticBeanstalkEnvironmentAllSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get"></a>

```java
public ElasticBeanstalkEnvironmentAllSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ElasticBeanstalkEnvironmentAllSettingsOutputReference <a name="ElasticBeanstalkEnvironmentAllSettingsOutputReference" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironmentAllSettingsOutputReference;

new ElasticBeanstalkEnvironmentAllSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings">ElasticBeanstalkEnvironmentAllSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.internalValue"></a>

```java
public ElasticBeanstalkEnvironmentAllSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings">ElasticBeanstalkEnvironmentAllSettings</a>

---


### ElasticBeanstalkEnvironmentSettingList <a name="ElasticBeanstalkEnvironmentSettingList" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironmentSettingList;

new ElasticBeanstalkEnvironmentSettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get"></a>

```java
public ElasticBeanstalkEnvironmentSettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticBeanstalkEnvironmentSetting> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>>

---


### ElasticBeanstalkEnvironmentSettingOutputReference <a name="ElasticBeanstalkEnvironmentSettingOutputReference" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.elastic_beanstalk_environment.ElasticBeanstalkEnvironmentSettingOutputReference;

new ElasticBeanstalkEnvironmentSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResource` <a name="resetResource" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticBeanstalkEnvironmentSetting getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>

---



