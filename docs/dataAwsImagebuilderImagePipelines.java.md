# `dataAwsImagebuilderImagePipelines` Submodule <a name="`dataAwsImagebuilderImagePipelines` Submodule" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderImagePipelines <a name="DataAwsImagebuilderImagePipelines" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines aws_imagebuilder_image_pipelines}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_imagebuilder_image_pipelines.DataAwsImagebuilderImagePipelines;

DataAwsImagebuilderImagePipelines.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsImagebuilderImagePipelinesFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#id DataAwsImagebuilderImagePipelines#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#filter DataAwsImagebuilderImagePipelines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#id DataAwsImagebuilderImagePipelines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#region DataAwsImagebuilderImagePipelines#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsImagebuilderImagePipelinesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsImagebuilderImagePipelines resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_imagebuilder_image_pipelines.DataAwsImagebuilderImagePipelines;

DataAwsImagebuilderImagePipelines.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_imagebuilder_image_pipelines.DataAwsImagebuilderImagePipelines;

DataAwsImagebuilderImagePipelines.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_imagebuilder_image_pipelines.DataAwsImagebuilderImagePipelines;

DataAwsImagebuilderImagePipelines.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_imagebuilder_image_pipelines.DataAwsImagebuilderImagePipelines;

DataAwsImagebuilderImagePipelines.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsImagebuilderImagePipelines.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsImagebuilderImagePipelines resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsImagebuilderImagePipelines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsImagebuilderImagePipelines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsImagebuilderImagePipelines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.arns">arns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList">DataAwsImagebuilderImagePipelinesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.arns"></a>

```java
public java.util.List<java.lang.String> getArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.filter"></a>

```java
public DataAwsImagebuilderImagePipelinesFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList">DataAwsImagebuilderImagePipelinesFilterList</a>

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsImagebuilderImagePipelinesFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelines.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderImagePipelinesConfig <a name="DataAwsImagebuilderImagePipelinesConfig" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_imagebuilder_image_pipelines.DataAwsImagebuilderImagePipelinesConfig;

DataAwsImagebuilderImagePipelinesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsImagebuilderImagePipelinesFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#id DataAwsImagebuilderImagePipelines#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsImagebuilderImagePipelinesFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#filter DataAwsImagebuilderImagePipelines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#id DataAwsImagebuilderImagePipelines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#region DataAwsImagebuilderImagePipelines#region}

---

### DataAwsImagebuilderImagePipelinesFilter <a name="DataAwsImagebuilderImagePipelinesFilter" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_imagebuilder_image_pipelines.DataAwsImagebuilderImagePipelinesFilter;

DataAwsImagebuilderImagePipelinesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#name DataAwsImagebuilderImagePipelines#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#values DataAwsImagebuilderImagePipelines#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#name DataAwsImagebuilderImagePipelines#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/imagebuilder_image_pipelines#values DataAwsImagebuilderImagePipelines#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderImagePipelinesFilterList <a name="DataAwsImagebuilderImagePipelinesFilterList" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_imagebuilder_image_pipelines.DataAwsImagebuilderImagePipelinesFilterList;

new DataAwsImagebuilderImagePipelinesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.get"></a>

```java
public DataAwsImagebuilderImagePipelinesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsImagebuilderImagePipelinesFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a>>

---


### DataAwsImagebuilderImagePipelinesFilterOutputReference <a name="DataAwsImagebuilderImagePipelinesFilterOutputReference" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_imagebuilder_image_pipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference;

new DataAwsImagebuilderImagePipelinesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsImagebuilderImagePipelinesFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsImagebuilderImagePipelines.DataAwsImagebuilderImagePipelinesFilter">DataAwsImagebuilderImagePipelinesFilter</a>

---



