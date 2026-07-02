# `imagebuilderInfrastructureConfiguration` Submodule <a name="`imagebuilderInfrastructureConfiguration` Submodule" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderInfrastructureConfiguration <a name="ImagebuilderInfrastructureConfiguration" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration aws_imagebuilder_infrastructure_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfiguration;

ImagebuilderInfrastructureConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceProfileName(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .instanceMetadataOptions(ImagebuilderInfrastructureConfigurationInstanceMetadataOptions)
//  .instanceTypes(java.util.List<java.lang.String>)
//  .keyPair(java.lang.String)
//  .logging(ImagebuilderInfrastructureConfigurationLogging)
//  .placement(ImagebuilderInfrastructureConfigurationPlacement)
//  .region(java.lang.String)
//  .resourceTags(java.util.Map<java.lang.String, java.lang.String>)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .snsTopicArn(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .terminateInstanceOnFailure(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceProfileName">instanceProfileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#name ImagebuilderInfrastructureConfiguration#name}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#description ImagebuilderInfrastructureConfiguration#description}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#id ImagebuilderInfrastructureConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#instance_types ImagebuilderInfrastructureConfiguration#instance_types}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#key_pair ImagebuilderInfrastructureConfiguration#key_pair}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | placement block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.resourceTags">resourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#tags ImagebuilderInfrastructureConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#tags_all ImagebuilderInfrastructureConfiguration#tags_all}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.terminateInstanceOnFailure">terminateInstanceOnFailure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceProfileName`<sup>Required</sup> <a name="instanceProfileName" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceProfileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#name ImagebuilderInfrastructureConfiguration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#description ImagebuilderInfrastructureConfiguration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#id ImagebuilderInfrastructureConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceMetadataOptions`<sup>Optional</sup> <a name="instanceMetadataOptions" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceMetadataOptions"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#instance_metadata_options ImagebuilderInfrastructureConfiguration#instance_metadata_options}

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#instance_types ImagebuilderInfrastructureConfiguration#instance_types}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.keyPair"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#key_pair ImagebuilderInfrastructureConfiguration#key_pair}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#logging ImagebuilderInfrastructureConfiguration#logging}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#placement ImagebuilderInfrastructureConfiguration#placement}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#region ImagebuilderInfrastructureConfiguration#region}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.resourceTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}.

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.snsTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#tags ImagebuilderInfrastructureConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#tags_all ImagebuilderInfrastructureConfiguration#tags_all}.

---

##### `terminateInstanceOnFailure`<sup>Optional</sup> <a name="terminateInstanceOnFailure" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.terminateInstanceOnFailure"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions">putInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceMetadataOptions">resetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceTypes">resetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTerminateInstanceOnFailure">resetTerminateInstanceOnFailure</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstanceMetadataOptions` <a name="putInstanceMetadataOptions" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions"></a>

```java
public void putInstanceMetadataOptions(ImagebuilderInfrastructureConfigurationInstanceMetadataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---

##### `putLogging` <a name="putLogging" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging"></a>

```java
public void putLogging(ImagebuilderInfrastructureConfigurationLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

---

##### `putPlacement` <a name="putPlacement" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement"></a>

```java
public void putPlacement(ImagebuilderInfrastructureConfigurationPlacement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceMetadataOptions` <a name="resetInstanceMetadataOptions" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceMetadataOptions"></a>

```java
public void resetInstanceMetadataOptions()
```

##### `resetInstanceTypes` <a name="resetInstanceTypes" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceTypes"></a>

```java
public void resetInstanceTypes()
```

##### `resetKeyPair` <a name="resetKeyPair" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetKeyPair"></a>

```java
public void resetKeyPair()
```

##### `resetLogging` <a name="resetLogging" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetPlacement"></a>

```java
public void resetPlacement()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetResourceTags"></a>

```java
public void resetResourceTags()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSnsTopicArn"></a>

```java
public void resetSnsTopicArn()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTerminateInstanceOnFailure` <a name="resetTerminateInstanceOnFailure" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTerminateInstanceOnFailure"></a>

```java
public void resetTerminateInstanceOnFailure()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderInfrastructureConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfiguration;

ImagebuilderInfrastructureConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfiguration;

ImagebuilderInfrastructureConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfiguration;

ImagebuilderInfrastructureConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfiguration;

ImagebuilderInfrastructureConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ImagebuilderInfrastructureConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ImagebuilderInfrastructureConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ImagebuilderInfrastructureConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ImagebuilderInfrastructureConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderInfrastructureConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dateCreated">dateCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dateUpdated">dateUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference">ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference">ImagebuilderInfrastructureConfigurationLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference">ImagebuilderInfrastructureConfigurationPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptionsInput">instanceMetadataOptionsInput</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileNameInput">instanceProfileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypesInput">instanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPairInput">keyPairInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placementInput">placementInput</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTagsInput">resourceTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailureInput">terminateInstanceOnFailureInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileName">instanceProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTags">resourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure">terminateInstanceOnFailure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dateCreated`<sup>Required</sup> <a name="dateCreated" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dateCreated"></a>

```java
public java.lang.String getDateCreated();
```

- *Type:* java.lang.String

---

##### `dateUpdated`<sup>Required</sup> <a name="dateUpdated" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dateUpdated"></a>

```java
public java.lang.String getDateUpdated();
```

- *Type:* java.lang.String

---

##### `instanceMetadataOptions`<sup>Required</sup> <a name="instanceMetadataOptions" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions"></a>

```java
public ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference getInstanceMetadataOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference">ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.logging"></a>

```java
public ImagebuilderInfrastructureConfigurationLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference">ImagebuilderInfrastructureConfigurationLoggingOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placement"></a>

```java
public ImagebuilderInfrastructureConfigurationPlacementOutputReference getPlacement();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference">ImagebuilderInfrastructureConfigurationPlacementOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceMetadataOptionsInput`<sup>Optional</sup> <a name="instanceMetadataOptionsInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptionsInput"></a>

```java
public ImagebuilderInfrastructureConfigurationInstanceMetadataOptions getInstanceMetadataOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---

##### `instanceProfileNameInput`<sup>Optional</sup> <a name="instanceProfileNameInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileNameInput"></a>

```java
public java.lang.String getInstanceProfileNameInput();
```

- *Type:* java.lang.String

---

##### `instanceTypesInput`<sup>Optional</sup> <a name="instanceTypesInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPairInput"></a>

```java
public java.lang.String getKeyPairInput();
```

- *Type:* java.lang.String

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.loggingInput"></a>

```java
public ImagebuilderInfrastructureConfigurationLogging getLoggingInput();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placementInput"></a>

```java
public ImagebuilderInfrastructureConfigurationPlacement getPlacementInput();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `terminateInstanceOnFailureInput`<sup>Optional</sup> <a name="terminateInstanceOnFailureInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailureInput"></a>

```java
public java.lang.Boolean|IResolvable getTerminateInstanceOnFailureInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceProfileName`<sup>Required</sup> <a name="instanceProfileName" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileName"></a>

```java
public java.lang.String getInstanceProfileName();
```

- *Type:* java.lang.String

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypes"></a>

```java
public java.util.List<java.lang.String> getInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `terminateInstanceOnFailure`<sup>Required</sup> <a name="terminateInstanceOnFailure" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

```java
public java.lang.Boolean|IResolvable getTerminateInstanceOnFailure();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderInfrastructureConfigurationConfig <a name="ImagebuilderInfrastructureConfigurationConfig" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfigurationConfig;

ImagebuilderInfrastructureConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceProfileName(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .instanceMetadataOptions(ImagebuilderInfrastructureConfigurationInstanceMetadataOptions)
//  .instanceTypes(java.util.List<java.lang.String>)
//  .keyPair(java.lang.String)
//  .logging(ImagebuilderInfrastructureConfigurationLogging)
//  .placement(ImagebuilderInfrastructureConfigurationPlacement)
//  .region(java.lang.String)
//  .resourceTags(java.util.Map<java.lang.String, java.lang.String>)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .snsTopicArn(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .terminateInstanceOnFailure(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceProfileName">instanceProfileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#name ImagebuilderInfrastructureConfiguration#name}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#description ImagebuilderInfrastructureConfiguration#description}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#id ImagebuilderInfrastructureConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#instance_types ImagebuilderInfrastructureConfiguration#instance_types}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#key_pair ImagebuilderInfrastructureConfiguration#key_pair}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | placement block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.resourceTags">resourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#tags ImagebuilderInfrastructureConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#tags_all ImagebuilderInfrastructureConfiguration#tags_all}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.terminateInstanceOnFailure">terminateInstanceOnFailure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceProfileName`<sup>Required</sup> <a name="instanceProfileName" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceProfileName"></a>

```java
public java.lang.String getInstanceProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#name ImagebuilderInfrastructureConfiguration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#description ImagebuilderInfrastructureConfiguration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#id ImagebuilderInfrastructureConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceMetadataOptions`<sup>Optional</sup> <a name="instanceMetadataOptions" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceMetadataOptions"></a>

```java
public ImagebuilderInfrastructureConfigurationInstanceMetadataOptions getInstanceMetadataOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#instance_metadata_options ImagebuilderInfrastructureConfiguration#instance_metadata_options}

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceTypes"></a>

```java
public java.util.List<java.lang.String> getInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#instance_types ImagebuilderInfrastructureConfiguration#instance_types}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#key_pair ImagebuilderInfrastructureConfiguration#key_pair}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.logging"></a>

```java
public ImagebuilderInfrastructureConfigurationLogging getLogging();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#logging ImagebuilderInfrastructureConfiguration#logging}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.placement"></a>

```java
public ImagebuilderInfrastructureConfigurationPlacement getPlacement();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#placement ImagebuilderInfrastructureConfiguration#placement}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#region ImagebuilderInfrastructureConfiguration#region}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.resourceTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}.

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#tags ImagebuilderInfrastructureConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#tags_all ImagebuilderInfrastructureConfiguration#tags_all}.

---

##### `terminateInstanceOnFailure`<sup>Optional</sup> <a name="terminateInstanceOnFailure" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.terminateInstanceOnFailure"></a>

```java
public java.lang.Boolean|IResolvable getTerminateInstanceOnFailure();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}.

---

### ImagebuilderInfrastructureConfigurationInstanceMetadataOptions <a name="ImagebuilderInfrastructureConfigurationInstanceMetadataOptions" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions;

ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.builder()
//  .httpPutResponseHopLimit(java.lang.Number)
//  .httpTokens(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#http_put_response_hop_limit ImagebuilderInfrastructureConfiguration#http_put_response_hop_limit}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#http_tokens ImagebuilderInfrastructureConfiguration#http_tokens}. |

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#http_put_response_hop_limit ImagebuilderInfrastructureConfiguration#http_put_response_hop_limit}.

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#http_tokens ImagebuilderInfrastructureConfiguration#http_tokens}.

---

### ImagebuilderInfrastructureConfigurationLogging <a name="ImagebuilderInfrastructureConfigurationLogging" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.Initializer"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfigurationLogging;

ImagebuilderInfrastructureConfigurationLogging.builder()
    .s3Logs(ImagebuilderInfrastructureConfigurationLoggingS3Logs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | s3_logs block. |

---

##### `s3Logs`<sup>Required</sup> <a name="s3Logs" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.property.s3Logs"></a>

```java
public ImagebuilderInfrastructureConfigurationLoggingS3Logs getS3Logs();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#s3_logs ImagebuilderInfrastructureConfiguration#s3_logs}

---

### ImagebuilderInfrastructureConfigurationLoggingS3Logs <a name="ImagebuilderInfrastructureConfigurationLoggingS3Logs" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.Initializer"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfigurationLoggingS3Logs;

ImagebuilderInfrastructureConfigurationLoggingS3Logs.builder()
    .s3BucketName(java.lang.String)
//  .s3KeyPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}. |

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}.

---

### ImagebuilderInfrastructureConfigurationPlacement <a name="ImagebuilderInfrastructureConfigurationPlacement" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.Initializer"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfigurationPlacement;

ImagebuilderInfrastructureConfigurationPlacement.builder()
//  .availabilityZone(java.lang.String)
//  .hostId(java.lang.String)
//  .hostResourceGroupArn(java.lang.String)
//  .tenancy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#availability_zone ImagebuilderInfrastructureConfiguration#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostId">hostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#host_id ImagebuilderInfrastructureConfiguration#host_id}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#host_resource_group_arn ImagebuilderInfrastructureConfiguration#host_resource_group_arn}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#tenancy ImagebuilderInfrastructureConfiguration#tenancy}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#availability_zone ImagebuilderInfrastructureConfiguration#availability_zone}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#host_id ImagebuilderInfrastructureConfiguration#host_id}.

---

##### `hostResourceGroupArn`<sup>Optional</sup> <a name="hostResourceGroupArn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostResourceGroupArn"></a>

```java
public java.lang.String getHostResourceGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#host_resource_group_arn ImagebuilderInfrastructureConfiguration#host_resource_group_arn}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/imagebuilder_infrastructure_configuration#tenancy ImagebuilderInfrastructureConfiguration#tenancy}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference <a name="ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference;

new ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```java
public void resetHttpPutResponseHopLimit()
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```java
public void resetHttpTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```java
public java.lang.Number getHttpPutResponseHopLimitInput();
```

- *Type:* java.lang.Number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```java
public java.lang.String getHttpTokensInput();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```java
public ImagebuilderInfrastructureConfigurationInstanceMetadataOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---


### ImagebuilderInfrastructureConfigurationLoggingOutputReference <a name="ImagebuilderInfrastructureConfigurationLoggingOutputReference" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfigurationLoggingOutputReference;

new ImagebuilderInfrastructureConfigurationLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs">putS3Logs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Logs` <a name="putS3Logs" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs"></a>

```java
public void putS3Logs(ImagebuilderInfrastructureConfigurationLoggingS3Logs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference">ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3LogsInput">s3LogsInput</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Logs`<sup>Required</sup> <a name="s3Logs" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs"></a>

```java
public ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference getS3Logs();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference">ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference</a>

---

##### `s3LogsInput`<sup>Optional</sup> <a name="s3LogsInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3LogsInput"></a>

```java
public ImagebuilderInfrastructureConfigurationLoggingS3Logs getS3LogsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue"></a>

```java
public ImagebuilderInfrastructureConfigurationLogging getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

---


### ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference <a name="ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference;

new ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3KeyPrefix"></a>

```java
public void resetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefixInput"></a>

```java
public java.lang.String getS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue"></a>

```java
public ImagebuilderInfrastructureConfigurationLoggingS3Logs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---


### ImagebuilderInfrastructureConfigurationPlacementOutputReference <a name="ImagebuilderInfrastructureConfigurationPlacementOutputReference" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.imagebuilder_infrastructure_configuration.ImagebuilderInfrastructureConfigurationPlacementOutputReference;

new ImagebuilderInfrastructureConfigurationPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostResourceGroupArn">resetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetTenancy">resetTenancy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetHostId` <a name="resetHostId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostId"></a>

```java
public void resetHostId()
```

##### `resetHostResourceGroupArn` <a name="resetHostResourceGroupArn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostResourceGroupArn"></a>

```java
public void resetHostResourceGroupArn()
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetTenancy"></a>

```java
public void resetTenancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostIdInput">hostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArnInput">hostResourceGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancyInput">tenancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostIdInput"></a>

```java
public java.lang.String getHostIdInput();
```

- *Type:* java.lang.String

---

##### `hostResourceGroupArnInput`<sup>Optional</sup> <a name="hostResourceGroupArnInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArnInput"></a>

```java
public java.lang.String getHostResourceGroupArnInput();
```

- *Type:* java.lang.String

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancyInput"></a>

```java
public java.lang.String getTenancyInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArn"></a>

```java
public java.lang.String getHostResourceGroupArn();
```

- *Type:* java.lang.String

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.internalValue"></a>

```java
public ImagebuilderInfrastructureConfigurationPlacement getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

---



