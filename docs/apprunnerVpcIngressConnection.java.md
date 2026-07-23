# `apprunnerVpcIngressConnection` Submodule <a name="`apprunnerVpcIngressConnection` Submodule" id="@cdktn/provider-aws.apprunnerVpcIngressConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerVpcIngressConnection <a name="ApprunnerVpcIngressConnection" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection aws_apprunner_vpc_ingress_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer"></a>

```java
import io.cdktn.providers.aws.apprunner_vpc_ingress_connection.ApprunnerVpcIngressConnection;

ApprunnerVpcIngressConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ingressVpcConfiguration(ApprunnerVpcIngressConnectionIngressVpcConfiguration)
    .name(java.lang.String)
    .serviceArn(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.ingressVpcConfiguration">ingressVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | ingress_vpc_configuration block. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#name ApprunnerVpcIngressConnection#name}. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#id ApprunnerVpcIngressConnection#id}. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#tags_all ApprunnerVpcIngressConnection#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ingressVpcConfiguration`<sup>Required</sup> <a name="ingressVpcConfiguration" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.ingressVpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

ingress_vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#ingress_vpc_configuration ApprunnerVpcIngressConnection#ingress_vpc_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#name ApprunnerVpcIngressConnection#name}.

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.serviceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#id ApprunnerVpcIngressConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#region ApprunnerVpcIngressConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#tags_all ApprunnerVpcIngressConnection#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putIngressVpcConfiguration">putIngressVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngressVpcConfiguration` <a name="putIngressVpcConfiguration" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putIngressVpcConfiguration"></a>

```java
public void putIngressVpcConfiguration(ApprunnerVpcIngressConnectionIngressVpcConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putIngressVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApprunnerVpcIngressConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isConstruct"></a>

```java
import io.cdktn.providers.aws.apprunner_vpc_ingress_connection.ApprunnerVpcIngressConnection;

ApprunnerVpcIngressConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.apprunner_vpc_ingress_connection.ApprunnerVpcIngressConnection;

ApprunnerVpcIngressConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.apprunner_vpc_ingress_connection.ApprunnerVpcIngressConnection;

ApprunnerVpcIngressConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.apprunner_vpc_ingress_connection.ApprunnerVpcIngressConnection;

ApprunnerVpcIngressConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApprunnerVpcIngressConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApprunnerVpcIngressConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApprunnerVpcIngressConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApprunnerVpcIngressConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerVpcIngressConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfiguration">ingressVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference">ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfigurationInput">ingressVpcConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArnInput">serviceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `ingressVpcConfiguration`<sup>Required</sup> <a name="ingressVpcConfiguration" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfiguration"></a>

```java
public ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference getIngressVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference">ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressVpcConfigurationInput`<sup>Optional</sup> <a name="ingressVpcConfigurationInput" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfigurationInput"></a>

```java
public ApprunnerVpcIngressConnectionIngressVpcConfiguration getIngressVpcConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceArnInput`<sup>Optional</sup> <a name="serviceArnInput" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArnInput"></a>

```java
public java.lang.String getServiceArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerVpcIngressConnectionConfig <a name="ApprunnerVpcIngressConnectionConfig" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.apprunner_vpc_ingress_connection.ApprunnerVpcIngressConnectionConfig;

ApprunnerVpcIngressConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ingressVpcConfiguration(ApprunnerVpcIngressConnectionIngressVpcConfiguration)
    .name(java.lang.String)
    .serviceArn(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.ingressVpcConfiguration">ingressVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | ingress_vpc_configuration block. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#name ApprunnerVpcIngressConnection#name}. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#id ApprunnerVpcIngressConnection#id}. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#tags_all ApprunnerVpcIngressConnection#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ingressVpcConfiguration`<sup>Required</sup> <a name="ingressVpcConfiguration" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.ingressVpcConfiguration"></a>

```java
public ApprunnerVpcIngressConnectionIngressVpcConfiguration getIngressVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

ingress_vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#ingress_vpc_configuration ApprunnerVpcIngressConnection#ingress_vpc_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#name ApprunnerVpcIngressConnection#name}.

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#id ApprunnerVpcIngressConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#region ApprunnerVpcIngressConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#tags_all ApprunnerVpcIngressConnection#tags_all}.

---

### ApprunnerVpcIngressConnectionIngressVpcConfiguration <a name="ApprunnerVpcIngressConnectionIngressVpcConfiguration" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.apprunner_vpc_ingress_connection.ApprunnerVpcIngressConnectionIngressVpcConfiguration;

ApprunnerVpcIngressConnectionIngressVpcConfiguration.builder()
//  .vpcEndpointId(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#vpc_endpoint_id ApprunnerVpcIngressConnection#vpc_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#vpc_id ApprunnerVpcIngressConnection#vpc_id}. |

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#vpc_endpoint_id ApprunnerVpcIngressConnection#vpc_endpoint_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/apprunner_vpc_ingress_connection#vpc_id ApprunnerVpcIngressConnection#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference <a name="ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.apprunner_vpc_ingress_connection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference;

new ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resetVpcEndpointId"></a>

```java
public void resetVpcEndpointId()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerVpcIngressConnectionIngressVpcConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

---



