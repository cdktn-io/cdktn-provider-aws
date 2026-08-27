# `lambdamicrovmsImage` Submodule <a name="`lambdamicrovmsImage` Submodule" id="@cdktn/provider-aws.lambdamicrovmsImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdamicrovmsImage <a name="LambdamicrovmsImage" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image aws_lambdamicrovms_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImage;

LambdamicrovmsImage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .baseImageArn(java.lang.String)
    .buildRoleArn(java.lang.String)
    .name(java.lang.String)
//  .additionalOsCapabilities(java.util.List<java.lang.String>)
//  .baseImageVersion(java.lang.String)
//  .codeArtifact(IResolvable|java.util.List<LambdamicrovmsImageCodeArtifact>)
//  .cpuConfiguration(IResolvable|java.util.List<LambdamicrovmsImageCpuConfiguration>)
//  .description(java.lang.String)
//  .egressNetworkConnectors(java.util.List<java.lang.String>)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LambdamicrovmsImageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.baseImageArn">baseImageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.buildRoleArn">buildRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.baseImageVersion">baseImageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.codeArtifact">codeArtifact</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>></code> | code_artifact block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.cpuConfiguration">cpuConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>></code> | cpu_configuration block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.baseImageArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}.

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.buildRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}.

---

##### `additionalOsCapabilities`<sup>Optional</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.additionalOsCapabilities"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}.

---

##### `baseImageVersion`<sup>Optional</sup> <a name="baseImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.baseImageVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}.

---

##### `codeArtifact`<sup>Optional</sup> <a name="codeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.codeArtifact"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>>

code_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#code_artifact LambdamicrovmsImage#code_artifact}

---

##### `cpuConfiguration`<sup>Optional</sup> <a name="cpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.cpuConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>>

cpu_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#cpu_configuration LambdamicrovmsImage#cpu_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}.

---

##### `egressNetworkConnectors`<sup>Optional</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.egressNetworkConnectors"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.environmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#region LambdamicrovmsImage#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#timeouts LambdamicrovmsImage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact">putCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration">putCpuConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetAdditionalOsCapabilities">resetAdditionalOsCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetBaseImageVersion">resetBaseImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCodeArtifact">resetCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCpuConfiguration">resetCpuConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEgressNetworkConnectors">resetEgressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCodeArtifact` <a name="putCodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact"></a>

```java
public void putCodeArtifact(IResolvable|java.util.List<LambdamicrovmsImageCodeArtifact> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>>

---

##### `putCpuConfiguration` <a name="putCpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration"></a>

```java
public void putCpuConfiguration(IResolvable|java.util.List<LambdamicrovmsImageCpuConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts"></a>

```java
public void putTimeouts(LambdamicrovmsImageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---

##### `resetAdditionalOsCapabilities` <a name="resetAdditionalOsCapabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetAdditionalOsCapabilities"></a>

```java
public void resetAdditionalOsCapabilities()
```

##### `resetBaseImageVersion` <a name="resetBaseImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetBaseImageVersion"></a>

```java
public void resetBaseImageVersion()
```

##### `resetCodeArtifact` <a name="resetCodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCodeArtifact"></a>

```java
public void resetCodeArtifact()
```

##### `resetCpuConfiguration` <a name="resetCpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCpuConfiguration"></a>

```java
public void resetCpuConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEgressNetworkConnectors` <a name="resetEgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEgressNetworkConnectors"></a>

```java
public void resetEgressNetworkConnectors()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdamicrovmsImage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImage;

LambdamicrovmsImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImage;

LambdamicrovmsImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImage;

LambdamicrovmsImage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImage;

LambdamicrovmsImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdamicrovmsImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdamicrovmsImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdamicrovmsImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdamicrovmsImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdamicrovmsImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifact">codeArtifact</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList">LambdamicrovmsImageCodeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfiguration">cpuConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList">LambdamicrovmsImageCpuConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestActiveImageVersion">latestActiveImageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestFailedImageVersion">latestFailedImageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference">LambdamicrovmsImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilitiesInput">additionalOsCapabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArnInput">baseImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersionInput">baseImageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArnInput">buildRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifactInput">codeArtifactInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfigurationInput">cpuConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectorsInput">egressNetworkConnectorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArn">baseImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersion">baseImageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArn">buildRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `codeArtifact`<sup>Required</sup> <a name="codeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifact"></a>

```java
public LambdamicrovmsImageCodeArtifactList getCodeArtifact();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList">LambdamicrovmsImageCodeArtifactList</a>

---

##### `cpuConfiguration`<sup>Required</sup> <a name="cpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfiguration"></a>

```java
public LambdamicrovmsImageCpuConfigurationList getCpuConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList">LambdamicrovmsImageCpuConfigurationList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

---

##### `latestActiveImageVersion`<sup>Required</sup> <a name="latestActiveImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestActiveImageVersion"></a>

```java
public java.lang.String getLatestActiveImageVersion();
```

- *Type:* java.lang.String

---

##### `latestFailedImageVersion`<sup>Required</sup> <a name="latestFailedImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestFailedImageVersion"></a>

```java
public java.lang.String getLatestFailedImageVersion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeouts"></a>

```java
public LambdamicrovmsImageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference">LambdamicrovmsImageTimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `additionalOsCapabilitiesInput`<sup>Optional</sup> <a name="additionalOsCapabilitiesInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalOsCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `baseImageArnInput`<sup>Optional</sup> <a name="baseImageArnInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArnInput"></a>

```java
public java.lang.String getBaseImageArnInput();
```

- *Type:* java.lang.String

---

##### `baseImageVersionInput`<sup>Optional</sup> <a name="baseImageVersionInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersionInput"></a>

```java
public java.lang.String getBaseImageVersionInput();
```

- *Type:* java.lang.String

---

##### `buildRoleArnInput`<sup>Optional</sup> <a name="buildRoleArnInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArnInput"></a>

```java
public java.lang.String getBuildRoleArnInput();
```

- *Type:* java.lang.String

---

##### `codeArtifactInput`<sup>Optional</sup> <a name="codeArtifactInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifactInput"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsImageCodeArtifact> getCodeArtifactInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>>

---

##### `cpuConfigurationInput`<sup>Optional</sup> <a name="cpuConfigurationInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfigurationInput"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsImageCpuConfiguration> getCpuConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `egressNetworkConnectorsInput`<sup>Optional</sup> <a name="egressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectorsInput"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeoutsInput"></a>

```java
public IResolvable|LambdamicrovmsImageTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---

##### `additionalOsCapabilities`<sup>Required</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilities"></a>

```java
public java.util.List<java.lang.String> getAdditionalOsCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArn"></a>

```java
public java.lang.String getBaseImageArn();
```

- *Type:* java.lang.String

---

##### `baseImageVersion`<sup>Required</sup> <a name="baseImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersion"></a>

```java
public java.lang.String getBaseImageVersion();
```

- *Type:* java.lang.String

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArn"></a>

```java
public java.lang.String getBuildRoleArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectors"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdamicrovmsImageCodeArtifact <a name="LambdamicrovmsImageCodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImageCodeArtifact;

LambdamicrovmsImageCodeArtifact.builder()
    .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#uri LambdamicrovmsImage#uri}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#uri LambdamicrovmsImage#uri}.

---

### LambdamicrovmsImageConfig <a name="LambdamicrovmsImageConfig" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImageConfig;

LambdamicrovmsImageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .baseImageArn(java.lang.String)
    .buildRoleArn(java.lang.String)
    .name(java.lang.String)
//  .additionalOsCapabilities(java.util.List<java.lang.String>)
//  .baseImageVersion(java.lang.String)
//  .codeArtifact(IResolvable|java.util.List<LambdamicrovmsImageCodeArtifact>)
//  .cpuConfiguration(IResolvable|java.util.List<LambdamicrovmsImageCpuConfiguration>)
//  .description(java.lang.String)
//  .egressNetworkConnectors(java.util.List<java.lang.String>)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LambdamicrovmsImageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageArn">baseImageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.buildRoleArn">buildRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageVersion">baseImageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.codeArtifact">codeArtifact</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>></code> | code_artifact block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.cpuConfiguration">cpuConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>></code> | cpu_configuration block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageArn"></a>

```java
public java.lang.String getBaseImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}.

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.buildRoleArn"></a>

```java
public java.lang.String getBuildRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}.

---

##### `additionalOsCapabilities`<sup>Optional</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.additionalOsCapabilities"></a>

```java
public java.util.List<java.lang.String> getAdditionalOsCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}.

---

##### `baseImageVersion`<sup>Optional</sup> <a name="baseImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageVersion"></a>

```java
public java.lang.String getBaseImageVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}.

---

##### `codeArtifact`<sup>Optional</sup> <a name="codeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.codeArtifact"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsImageCodeArtifact> getCodeArtifact();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>>

code_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#code_artifact LambdamicrovmsImage#code_artifact}

---

##### `cpuConfiguration`<sup>Optional</sup> <a name="cpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.cpuConfiguration"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsImageCpuConfiguration> getCpuConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>>

cpu_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#cpu_configuration LambdamicrovmsImage#cpu_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}.

---

##### `egressNetworkConnectors`<sup>Optional</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.egressNetworkConnectors"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectors();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#region LambdamicrovmsImage#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.timeouts"></a>

```java
public LambdamicrovmsImageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#timeouts LambdamicrovmsImage#timeouts}

---

### LambdamicrovmsImageCpuConfiguration <a name="LambdamicrovmsImageCpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImageCpuConfiguration;

LambdamicrovmsImageCpuConfiguration.builder()
    .architecture(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.property.architecture">architecture</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#architecture LambdamicrovmsImage#architecture}. |

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#architecture LambdamicrovmsImage#architecture}.

---

### LambdamicrovmsImageTimeouts <a name="LambdamicrovmsImageTimeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImageTimeouts;

LambdamicrovmsImageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#create LambdamicrovmsImage#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#delete LambdamicrovmsImage#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#update LambdamicrovmsImage#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdamicrovmsImageCodeArtifactList <a name="LambdamicrovmsImageCodeArtifactList" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImageCodeArtifactList;

new LambdamicrovmsImageCodeArtifactList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get"></a>

```java
public LambdamicrovmsImageCodeArtifactOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsImageCodeArtifact> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>>

---


### LambdamicrovmsImageCodeArtifactOutputReference <a name="LambdamicrovmsImageCodeArtifactOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImageCodeArtifactOutputReference;

new LambdamicrovmsImageCodeArtifactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdamicrovmsImageCodeArtifact getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>

---


### LambdamicrovmsImageCpuConfigurationList <a name="LambdamicrovmsImageCpuConfigurationList" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImageCpuConfigurationList;

new LambdamicrovmsImageCpuConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get"></a>

```java
public LambdamicrovmsImageCpuConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsImageCpuConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>>

---


### LambdamicrovmsImageCpuConfigurationOutputReference <a name="LambdamicrovmsImageCpuConfigurationOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImageCpuConfigurationOutputReference;

new LambdamicrovmsImageCpuConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architectureInput">architectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architectureInput"></a>

```java
public java.lang.String getArchitectureInput();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdamicrovmsImageCpuConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>

---


### LambdamicrovmsImageTimeoutsOutputReference <a name="LambdamicrovmsImageTimeoutsOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_image.LambdamicrovmsImageTimeoutsOutputReference;

new LambdamicrovmsImageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdamicrovmsImageTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---



