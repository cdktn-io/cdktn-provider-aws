# `dataAwsLambdamicrovmsImageVersion` Submodule <a name="`dataAwsLambdamicrovmsImageVersion` Submodule" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdamicrovmsImageVersion <a name="DataAwsLambdamicrovmsImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version aws_lambdamicrovms_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersion;

DataAwsLambdamicrovmsImageVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .imageIdentifier(java.lang.String)
    .imageVersion(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.imageIdentifier">imageIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `imageIdentifier`<sup>Required</sup> <a name="imageIdentifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.imageIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}.

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.imageVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#region DataAwsLambdamicrovmsImageVersion#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersion;

DataAwsLambdamicrovmsImageVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersion;

DataAwsLambdamicrovmsImageVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersion;

DataAwsLambdamicrovmsImageVersion.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersion;

DataAwsLambdamicrovmsImageVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsLambdamicrovmsImageVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsLambdamicrovmsImageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsLambdamicrovmsImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsLambdamicrovmsImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageArn">baseImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageVersion">baseImageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.buildRoleArn">buildRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.codeArtifact">codeArtifact</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList">DataAwsLambdamicrovmsImageVersionCodeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cpuConfiguration">cpuConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList">DataAwsLambdamicrovmsImageVersionCpuConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.environmentVariables">environmentVariables</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList">DataAwsLambdamicrovmsImageVersionHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageArn">imageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList">DataAwsLambdamicrovmsImageVersionLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList">DataAwsLambdamicrovmsImageVersionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.stateReason">stateReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifierInput">imageIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersionInput">imageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifier">imageIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `additionalOsCapabilities`<sup>Required</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.additionalOsCapabilities"></a>

```java
public java.util.List<java.lang.String> getAdditionalOsCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageArn"></a>

```java
public java.lang.String getBaseImageArn();
```

- *Type:* java.lang.String

---

##### `baseImageVersion`<sup>Required</sup> <a name="baseImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageVersion"></a>

```java
public java.lang.String getBaseImageVersion();
```

- *Type:* java.lang.String

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.buildRoleArn"></a>

```java
public java.lang.String getBuildRoleArn();
```

- *Type:* java.lang.String

---

##### `codeArtifact`<sup>Required</sup> <a name="codeArtifact" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.codeArtifact"></a>

```java
public DataAwsLambdamicrovmsImageVersionCodeArtifactList getCodeArtifact();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList">DataAwsLambdamicrovmsImageVersionCodeArtifactList</a>

---

##### `cpuConfiguration`<sup>Required</sup> <a name="cpuConfiguration" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cpuConfiguration"></a>

```java
public DataAwsLambdamicrovmsImageVersionCpuConfigurationList getCpuConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList">DataAwsLambdamicrovmsImageVersionCpuConfigurationList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.egressNetworkConnectors"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.environmentVariables"></a>

```java
public StringMap getEnvironmentVariables();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.hooks"></a>

```java
public DataAwsLambdamicrovmsImageVersionHooksList getHooks();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList">DataAwsLambdamicrovmsImageVersionHooksList</a>

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageArn"></a>

```java
public java.lang.String getImageArn();
```

- *Type:* java.lang.String

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.logging"></a>

```java
public DataAwsLambdamicrovmsImageVersionLoggingList getLogging();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList">DataAwsLambdamicrovmsImageVersionLoggingList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.resources"></a>

```java
public DataAwsLambdamicrovmsImageVersionResourcesList getResources();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList">DataAwsLambdamicrovmsImageVersionResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.stateReason"></a>

```java
public java.lang.String getStateReason();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `imageIdentifierInput`<sup>Optional</sup> <a name="imageIdentifierInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifierInput"></a>

```java
public java.lang.String getImageIdentifierInput();
```

- *Type:* java.lang.String

---

##### `imageVersionInput`<sup>Optional</sup> <a name="imageVersionInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersionInput"></a>

```java
public java.lang.String getImageVersionInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `imageIdentifier`<sup>Required</sup> <a name="imageIdentifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifier"></a>

```java
public java.lang.String getImageIdentifier();
```

- *Type:* java.lang.String

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdamicrovmsImageVersionCodeArtifact <a name="DataAwsLambdamicrovmsImageVersionCodeArtifact" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionCodeArtifact;

DataAwsLambdamicrovmsImageVersionCodeArtifact.builder()
    .build();
```


### DataAwsLambdamicrovmsImageVersionConfig <a name="DataAwsLambdamicrovmsImageVersionConfig" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionConfig;

DataAwsLambdamicrovmsImageVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .imageIdentifier(java.lang.String)
    .imageVersion(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageIdentifier">imageIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `imageIdentifier`<sup>Required</sup> <a name="imageIdentifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageIdentifier"></a>

```java
public java.lang.String getImageIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}.

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#region DataAwsLambdamicrovmsImageVersion#region}

---

### DataAwsLambdamicrovmsImageVersionCpuConfiguration <a name="DataAwsLambdamicrovmsImageVersionCpuConfiguration" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionCpuConfiguration;

DataAwsLambdamicrovmsImageVersionCpuConfiguration.builder()
    .build();
```


### DataAwsLambdamicrovmsImageVersionHooks <a name="DataAwsLambdamicrovmsImageVersionHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionHooks;

DataAwsLambdamicrovmsImageVersionHooks.builder()
    .build();
```


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks;

DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks.builder()
    .build();
```


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks;

DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks.builder()
    .build();
```


### DataAwsLambdamicrovmsImageVersionLogging <a name="DataAwsLambdamicrovmsImageVersionLogging" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionLogging;

DataAwsLambdamicrovmsImageVersionLogging.builder()
    .build();
```


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatch <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatch" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch;

DataAwsLambdamicrovmsImageVersionLoggingCloudwatch.builder()
    .build();
```


### DataAwsLambdamicrovmsImageVersionLoggingDisabled <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabled" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionLoggingDisabled;

DataAwsLambdamicrovmsImageVersionLoggingDisabled.builder()
    .build();
```


### DataAwsLambdamicrovmsImageVersionResources <a name="DataAwsLambdamicrovmsImageVersionResources" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionResources;

DataAwsLambdamicrovmsImageVersionResources.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdamicrovmsImageVersionCodeArtifactList <a name="DataAwsLambdamicrovmsImageVersionCodeArtifactList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionCodeArtifactList;

new DataAwsLambdamicrovmsImageVersionCodeArtifactList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get"></a>

```java
public DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference <a name="DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference;

new DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact">DataAwsLambdamicrovmsImageVersionCodeArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.internalValue"></a>

```java
public DataAwsLambdamicrovmsImageVersionCodeArtifact getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact">DataAwsLambdamicrovmsImageVersionCodeArtifact</a>

---


### DataAwsLambdamicrovmsImageVersionCpuConfigurationList <a name="DataAwsLambdamicrovmsImageVersionCpuConfigurationList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionCpuConfigurationList;

new DataAwsLambdamicrovmsImageVersionCpuConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get"></a>

```java
public DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference <a name="DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference;

new DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration">DataAwsLambdamicrovmsImageVersionCpuConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsLambdamicrovmsImageVersionCpuConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration">DataAwsLambdamicrovmsImageVersionCpuConfiguration</a>

---


### DataAwsLambdamicrovmsImageVersionHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionHooksList;

new DataAwsLambdamicrovmsImageVersionHooksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get"></a>

```java
public DataAwsLambdamicrovmsImageVersionHooksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList;

new DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get"></a>

```java
public DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference;

new DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resume">resume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">resumeTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.run">run</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">runTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspend">suspend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">suspendTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminate">terminate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">terminateTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resume`<sup>Required</sup> <a name="resume" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resume"></a>

```java
public java.lang.String getResume();
```

- *Type:* java.lang.String

---

##### `resumeTimeoutInSeconds`<sup>Required</sup> <a name="resumeTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```java
public java.lang.Number getResumeTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.run"></a>

```java
public java.lang.String getRun();
```

- *Type:* java.lang.String

---

##### `runTimeoutInSeconds`<sup>Required</sup> <a name="runTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```java
public java.lang.Number getRunTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspend"></a>

```java
public java.lang.String getSuspend();
```

- *Type:* java.lang.String

---

##### `suspendTimeoutInSeconds`<sup>Required</sup> <a name="suspendTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```java
public java.lang.Number getSuspendTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `terminate`<sup>Required</sup> <a name="terminate" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminate"></a>

```java
public java.lang.String getTerminate();
```

- *Type:* java.lang.String

---

##### `terminateTimeoutInSeconds`<sup>Required</sup> <a name="terminateTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```java
public java.lang.Number getTerminateTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.internalValue"></a>

```java
public DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks</a>

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList;

new DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get"></a>

```java
public DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference;

new DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.ready">ready</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">readyTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validate">validate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">validateTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.ready"></a>

```java
public java.lang.String getReady();
```

- *Type:* java.lang.String

---

##### `readyTimeoutInSeconds`<sup>Required</sup> <a name="readyTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```java
public java.lang.Number getReadyTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validate"></a>

```java
public java.lang.String getValidate();
```

- *Type:* java.lang.String

---

##### `validateTimeoutInSeconds`<sup>Required</sup> <a name="validateTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```java
public java.lang.Number getValidateTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```java
public DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks</a>

---


### DataAwsLambdamicrovmsImageVersionHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionHooksOutputReference;

new DataAwsLambdamicrovmsImageVersionHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmHooks">microvmHooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmImageHooks">microvmImageHooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks">DataAwsLambdamicrovmsImageVersionHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `microvmHooks`<sup>Required</sup> <a name="microvmHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmHooks"></a>

```java
public DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList getMicrovmHooks();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList</a>

---

##### `microvmImageHooks`<sup>Required</sup> <a name="microvmImageHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmImageHooks"></a>

```java
public DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList getMicrovmImageHooks();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.internalValue"></a>

```java
public DataAwsLambdamicrovmsImageVersionHooks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks">DataAwsLambdamicrovmsImageVersionHooks</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList;

new DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get"></a>

```java
public DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference;

new DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logStream">logStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch">DataAwsLambdamicrovmsImageVersionLoggingCloudwatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `logStream`<sup>Required</sup> <a name="logStream" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logStream"></a>

```java
public java.lang.String getLogStream();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.internalValue"></a>

```java
public DataAwsLambdamicrovmsImageVersionLoggingCloudwatch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch">DataAwsLambdamicrovmsImageVersionLoggingCloudwatch</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingDisabledList <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabledList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionLoggingDisabledList;

new DataAwsLambdamicrovmsImageVersionLoggingDisabledList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get"></a>

```java
public DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference;

new DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled">DataAwsLambdamicrovmsImageVersionLoggingDisabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.internalValue"></a>

```java
public DataAwsLambdamicrovmsImageVersionLoggingDisabled getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled">DataAwsLambdamicrovmsImageVersionLoggingDisabled</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingList <a name="DataAwsLambdamicrovmsImageVersionLoggingList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionLoggingList;

new DataAwsLambdamicrovmsImageVersionLoggingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get"></a>

```java
public DataAwsLambdamicrovmsImageVersionLoggingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdamicrovmsImageVersionLoggingOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionLoggingOutputReference;

new DataAwsLambdamicrovmsImageVersionLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList">DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.disabled">disabled</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList">DataAwsLambdamicrovmsImageVersionLoggingDisabledList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging">DataAwsLambdamicrovmsImageVersionLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.cloudwatch"></a>

```java
public DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList getCloudwatch();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList">DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.disabled"></a>

```java
public DataAwsLambdamicrovmsImageVersionLoggingDisabledList getDisabled();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList">DataAwsLambdamicrovmsImageVersionLoggingDisabledList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.internalValue"></a>

```java
public DataAwsLambdamicrovmsImageVersionLogging getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging">DataAwsLambdamicrovmsImageVersionLogging</a>

---


### DataAwsLambdamicrovmsImageVersionResourcesList <a name="DataAwsLambdamicrovmsImageVersionResourcesList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionResourcesList;

new DataAwsLambdamicrovmsImageVersionResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get"></a>

```java
public DataAwsLambdamicrovmsImageVersionResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLambdamicrovmsImageVersionResourcesOutputReference <a name="DataAwsLambdamicrovmsImageVersionResourcesOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_lambdamicrovms_image_version.DataAwsLambdamicrovmsImageVersionResourcesOutputReference;

new DataAwsLambdamicrovmsImageVersionResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.minimumMemoryInMib">minimumMemoryInMib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources">DataAwsLambdamicrovmsImageVersionResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumMemoryInMib`<sup>Required</sup> <a name="minimumMemoryInMib" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.minimumMemoryInMib"></a>

```java
public java.lang.Number getMinimumMemoryInMib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.internalValue"></a>

```java
public DataAwsLambdamicrovmsImageVersionResources getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources">DataAwsLambdamicrovmsImageVersionResources</a>

---



