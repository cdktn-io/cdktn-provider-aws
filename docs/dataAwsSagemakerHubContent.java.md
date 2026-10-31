# `dataAwsSagemakerHubContent` Submodule <a name="`dataAwsSagemakerHubContent` Submodule" id="@cdktn/provider-aws.dataAwsSagemakerHubContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSagemakerHubContent <a name="DataAwsSagemakerHubContent" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content aws_sagemaker_hub_content}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_sagemaker_hub_content.DataAwsSagemakerHubContent;

DataAwsSagemakerHubContent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hubContentName(java.lang.String)
    .hubContentType(java.lang.String)
    .hubName(java.lang.String)
//  .hubContentVersion(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentName">hubContentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentType">hubContentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubName">hubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentVersion">hubContentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hubContentName`<sup>Required</sup> <a name="hubContentName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}.

---

##### `hubContentType`<sup>Required</sup> <a name="hubContentType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}.

---

##### `hubName`<sup>Required</sup> <a name="hubName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}.

---

##### `hubContentVersion`<sup>Optional</sup> <a name="hubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.hubContentVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#region DataAwsSagemakerHubContent#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetHubContentVersion">resetHubContentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetHubContentVersion` <a name="resetHubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetHubContentVersion"></a>

```java
public void resetHubContentVersion()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_sagemaker_hub_content.DataAwsSagemakerHubContent;

DataAwsSagemakerHubContent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_sagemaker_hub_content.DataAwsSagemakerHubContent;

DataAwsSagemakerHubContent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_sagemaker_hub_content.DataAwsSagemakerHubContent;

DataAwsSagemakerHubContent.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_sagemaker_hub_content.DataAwsSagemakerHubContent;

DataAwsSagemakerHubContent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsSagemakerHubContent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsSagemakerHubContent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsSagemakerHubContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSagemakerHubContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.documentSchemaVersion">documentSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubArn">hubArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentArn">hubContentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDependency">hubContentDependency</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList">DataAwsSagemakerHubContentHubContentDependencyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDescription">hubContentDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDisplayName">hubContentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDocument">hubContentDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentMarkdown">hubContentMarkdown</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentSearchKeywords">hubContentSearchKeywords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentStatus">hubContentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.referenceMinVersion">referenceMinVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.sagemakerPublicHubContentArn">sagemakerPublicHubContentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.supportStatus">supportStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.versionedHubContentArn">versionedHubContentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentNameInput">hubContentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentTypeInput">hubContentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersionInput">hubContentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubNameInput">hubNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentName">hubContentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentType">hubContentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersion">hubContentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubName">hubName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `documentSchemaVersion`<sup>Required</sup> <a name="documentSchemaVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.documentSchemaVersion"></a>

```java
public java.lang.String getDocumentSchemaVersion();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `hubArn`<sup>Required</sup> <a name="hubArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubArn"></a>

```java
public java.lang.String getHubArn();
```

- *Type:* java.lang.String

---

##### `hubContentArn`<sup>Required</sup> <a name="hubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentArn"></a>

```java
public java.lang.String getHubContentArn();
```

- *Type:* java.lang.String

---

##### `hubContentDependency`<sup>Required</sup> <a name="hubContentDependency" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDependency"></a>

```java
public DataAwsSagemakerHubContentHubContentDependencyList getHubContentDependency();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList">DataAwsSagemakerHubContentHubContentDependencyList</a>

---

##### `hubContentDescription`<sup>Required</sup> <a name="hubContentDescription" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDescription"></a>

```java
public java.lang.String getHubContentDescription();
```

- *Type:* java.lang.String

---

##### `hubContentDisplayName`<sup>Required</sup> <a name="hubContentDisplayName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDisplayName"></a>

```java
public java.lang.String getHubContentDisplayName();
```

- *Type:* java.lang.String

---

##### `hubContentDocument`<sup>Required</sup> <a name="hubContentDocument" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDocument"></a>

```java
public java.lang.String getHubContentDocument();
```

- *Type:* java.lang.String

---

##### `hubContentMarkdown`<sup>Required</sup> <a name="hubContentMarkdown" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentMarkdown"></a>

```java
public java.lang.String getHubContentMarkdown();
```

- *Type:* java.lang.String

---

##### `hubContentSearchKeywords`<sup>Required</sup> <a name="hubContentSearchKeywords" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentSearchKeywords"></a>

```java
public java.util.List<java.lang.String> getHubContentSearchKeywords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hubContentStatus`<sup>Required</sup> <a name="hubContentStatus" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentStatus"></a>

```java
public java.lang.String getHubContentStatus();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `referenceMinVersion`<sup>Required</sup> <a name="referenceMinVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.referenceMinVersion"></a>

```java
public java.lang.String getReferenceMinVersion();
```

- *Type:* java.lang.String

---

##### `sagemakerPublicHubContentArn`<sup>Required</sup> <a name="sagemakerPublicHubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.sagemakerPublicHubContentArn"></a>

```java
public java.lang.String getSagemakerPublicHubContentArn();
```

- *Type:* java.lang.String

---

##### `supportStatus`<sup>Required</sup> <a name="supportStatus" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.supportStatus"></a>

```java
public java.lang.String getSupportStatus();
```

- *Type:* java.lang.String

---

##### `versionedHubContentArn`<sup>Required</sup> <a name="versionedHubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.versionedHubContentArn"></a>

```java
public java.lang.String getVersionedHubContentArn();
```

- *Type:* java.lang.String

---

##### `hubContentNameInput`<sup>Optional</sup> <a name="hubContentNameInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentNameInput"></a>

```java
public java.lang.String getHubContentNameInput();
```

- *Type:* java.lang.String

---

##### `hubContentTypeInput`<sup>Optional</sup> <a name="hubContentTypeInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentTypeInput"></a>

```java
public java.lang.String getHubContentTypeInput();
```

- *Type:* java.lang.String

---

##### `hubContentVersionInput`<sup>Optional</sup> <a name="hubContentVersionInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersionInput"></a>

```java
public java.lang.String getHubContentVersionInput();
```

- *Type:* java.lang.String

---

##### `hubNameInput`<sup>Optional</sup> <a name="hubNameInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubNameInput"></a>

```java
public java.lang.String getHubNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `hubContentName`<sup>Required</sup> <a name="hubContentName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentName"></a>

```java
public java.lang.String getHubContentName();
```

- *Type:* java.lang.String

---

##### `hubContentType`<sup>Required</sup> <a name="hubContentType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentType"></a>

```java
public java.lang.String getHubContentType();
```

- *Type:* java.lang.String

---

##### `hubContentVersion`<sup>Required</sup> <a name="hubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersion"></a>

```java
public java.lang.String getHubContentVersion();
```

- *Type:* java.lang.String

---

##### `hubName`<sup>Required</sup> <a name="hubName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubName"></a>

```java
public java.lang.String getHubName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSagemakerHubContentConfig <a name="DataAwsSagemakerHubContentConfig" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_sagemaker_hub_content.DataAwsSagemakerHubContentConfig;

DataAwsSagemakerHubContentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hubContentName(java.lang.String)
    .hubContentType(java.lang.String)
    .hubName(java.lang.String)
//  .hubContentVersion(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentName">hubContentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentType">hubContentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubName">hubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentVersion">hubContentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hubContentName`<sup>Required</sup> <a name="hubContentName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentName"></a>

```java
public java.lang.String getHubContentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}.

---

##### `hubContentType`<sup>Required</sup> <a name="hubContentType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentType"></a>

```java
public java.lang.String getHubContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}.

---

##### `hubName`<sup>Required</sup> <a name="hubName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubName"></a>

```java
public java.lang.String getHubName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}.

---

##### `hubContentVersion`<sup>Optional</sup> <a name="hubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentVersion"></a>

```java
public java.lang.String getHubContentVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#region DataAwsSagemakerHubContent#region}

---

### DataAwsSagemakerHubContentHubContentDependency <a name="DataAwsSagemakerHubContentHubContentDependency" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_sagemaker_hub_content.DataAwsSagemakerHubContentHubContentDependency;

DataAwsSagemakerHubContentHubContentDependency.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSagemakerHubContentHubContentDependencyList <a name="DataAwsSagemakerHubContentHubContentDependencyList" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_sagemaker_hub_content.DataAwsSagemakerHubContentHubContentDependencyList;

new DataAwsSagemakerHubContentHubContentDependencyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get"></a>

```java
public DataAwsSagemakerHubContentHubContentDependencyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsSagemakerHubContentHubContentDependencyOutputReference <a name="DataAwsSagemakerHubContentHubContentDependencyOutputReference" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_sagemaker_hub_content.DataAwsSagemakerHubContentHubContentDependencyOutputReference;

new DataAwsSagemakerHubContentHubContentDependencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyCopyPath">dependencyCopyPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyOriginPath">dependencyOriginPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency">DataAwsSagemakerHubContentHubContentDependency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyCopyPath`<sup>Required</sup> <a name="dependencyCopyPath" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyCopyPath"></a>

```java
public java.lang.String getDependencyCopyPath();
```

- *Type:* java.lang.String

---

##### `dependencyOriginPath`<sup>Required</sup> <a name="dependencyOriginPath" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyOriginPath"></a>

```java
public java.lang.String getDependencyOriginPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.internalValue"></a>

```java
public DataAwsSagemakerHubContentHubContentDependency getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency">DataAwsSagemakerHubContentHubContentDependency</a>

---



