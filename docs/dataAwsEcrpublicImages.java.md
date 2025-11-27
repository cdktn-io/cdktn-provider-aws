# `dataAwsEcrpublicImages` Submodule <a name="`dataAwsEcrpublicImages` Submodule" id="@cdktf/provider-aws.dataAwsEcrpublicImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrpublicImages <a name="DataAwsEcrpublicImages" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images aws_ecrpublic_images}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImages;

DataAwsEcrpublicImages.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .repositoryName(java.lang.String)
//  .imageIds(IResolvable|java.util.List<DataAwsEcrpublicImagesImageIds>)
//  .region(java.lang.String)
//  .registryId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | Name of the public repository. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.imageIds">imageIds</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>></code> | image_ids block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.registryId">registryId</a></code> | <code>java.lang.String</code> | AWS account ID associated with the public registry that contains the repository. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.repositoryName"></a>

- *Type:* java.lang.String

Name of the public repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#repository_name DataAwsEcrpublicImages#repository_name}

---

##### `imageIds`<sup>Optional</sup> <a name="imageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.imageIds"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>>

image_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#image_ids DataAwsEcrpublicImages#image_ids}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#region DataAwsEcrpublicImages#region}

---

##### `registryId`<sup>Optional</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.registryId"></a>

- *Type:* java.lang.String

AWS account ID associated with the public registry that contains the repository.

If not specified, the default public registry is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#registry_id DataAwsEcrpublicImages#registry_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.putImageIds">putImageIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetImageIds">resetImageIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegistryId">resetRegistryId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putImageIds` <a name="putImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.putImageIds"></a>

```java
public void putImageIds(IResolvable|java.util.List<DataAwsEcrpublicImagesImageIds> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.putImageIds.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>>

---

##### `resetImageIds` <a name="resetImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetImageIds"></a>

```java
public void resetImageIds()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRegistryId` <a name="resetRegistryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegistryId"></a>

```java
public void resetRegistryId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcrpublicImages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImages;

DataAwsEcrpublicImages.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImages;

DataAwsEcrpublicImages.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImages;

DataAwsEcrpublicImages.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImages;

DataAwsEcrpublicImages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEcrpublicImages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsEcrpublicImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEcrpublicImages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEcrpublicImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcrpublicImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIds">imageIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList">DataAwsEcrpublicImagesImageIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.images">images</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList">DataAwsEcrpublicImagesImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIdsInput">imageIdsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryIdInput">registryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryNameInput">repositoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `imageIds`<sup>Required</sup> <a name="imageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIds"></a>

```java
public DataAwsEcrpublicImagesImageIdsList getImageIds();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList">DataAwsEcrpublicImagesImageIdsList</a>

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.images"></a>

```java
public DataAwsEcrpublicImagesImagesList getImages();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList">DataAwsEcrpublicImagesImagesList</a>

---

##### `imageIdsInput`<sup>Optional</sup> <a name="imageIdsInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIdsInput"></a>

```java
public IResolvable|java.util.List<DataAwsEcrpublicImagesImageIds> getImageIdsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `registryIdInput`<sup>Optional</sup> <a name="registryIdInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryIdInput"></a>

```java
public java.lang.String getRegistryIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryNameInput"></a>

```java
public java.lang.String getRepositoryNameInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrpublicImagesConfig <a name="DataAwsEcrpublicImagesConfig" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImagesConfig;

DataAwsEcrpublicImagesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .repositoryName(java.lang.String)
//  .imageIds(IResolvable|java.util.List<DataAwsEcrpublicImagesImageIds>)
//  .region(java.lang.String)
//  .registryId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | Name of the public repository. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.imageIds">imageIds</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>></code> | image_ids block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.registryId">registryId</a></code> | <code>java.lang.String</code> | AWS account ID associated with the public registry that contains the repository. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

Name of the public repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#repository_name DataAwsEcrpublicImages#repository_name}

---

##### `imageIds`<sup>Optional</sup> <a name="imageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.imageIds"></a>

```java
public IResolvable|java.util.List<DataAwsEcrpublicImagesImageIds> getImageIds();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>>

image_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#image_ids DataAwsEcrpublicImages#image_ids}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#region DataAwsEcrpublicImages#region}

---

##### `registryId`<sup>Optional</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

AWS account ID associated with the public registry that contains the repository.

If not specified, the default public registry is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#registry_id DataAwsEcrpublicImages#registry_id}

---

### DataAwsEcrpublicImagesImageIds <a name="DataAwsEcrpublicImagesImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImagesImageIds;

DataAwsEcrpublicImagesImageIds.builder()
//  .imageDigest(java.lang.String)
//  .imageTag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | Image digest. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageTag">imageTag</a></code> | <code>java.lang.String</code> | Image tag. |

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

Image digest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#image_digest DataAwsEcrpublicImages#image_digest}

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageTag"></a>

```java
public java.lang.String getImageTag();
```

- *Type:* java.lang.String

Image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecrpublic_images#image_tag DataAwsEcrpublicImages#image_tag}

---

### DataAwsEcrpublicImagesImages <a name="DataAwsEcrpublicImagesImages" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImagesImages;

DataAwsEcrpublicImagesImages.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcrpublicImagesImageIdsList <a name="DataAwsEcrpublicImagesImageIdsList" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImagesImageIdsList;

new DataAwsEcrpublicImagesImageIdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.get"></a>

```java
public DataAwsEcrpublicImagesImageIdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsEcrpublicImagesImageIds> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>>

---


### DataAwsEcrpublicImagesImageIdsOutputReference <a name="DataAwsEcrpublicImagesImageIdsOutputReference" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImagesImageIdsOutputReference;

new DataAwsEcrpublicImagesImageIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageTag">resetImageTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageDigest` <a name="resetImageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageDigest"></a>

```java
public void resetImageDigest()
```

##### `resetImageTag` <a name="resetImageTag" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageTag"></a>

```java
public void resetImageTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigestInput">imageDigestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTagInput">imageTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTag">imageTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigestInput"></a>

```java
public java.lang.String getImageDigestInput();
```

- *Type:* java.lang.String

---

##### `imageTagInput`<sup>Optional</sup> <a name="imageTagInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTagInput"></a>

```java
public java.lang.String getImageTagInput();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `imageTag`<sup>Required</sup> <a name="imageTag" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTag"></a>

```java
public java.lang.String getImageTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEcrpublicImagesImageIds getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>

---


### DataAwsEcrpublicImagesImagesList <a name="DataAwsEcrpublicImagesImagesList" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImagesImagesList;

new DataAwsEcrpublicImagesImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.get"></a>

```java
public DataAwsEcrpublicImagesImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcrpublicImagesImagesOutputReference <a name="DataAwsEcrpublicImagesImagesOutputReference" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecrpublic_images.DataAwsEcrpublicImagesImagesOutputReference;

new DataAwsEcrpublicImagesImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.artifactMediaType">artifactMediaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageManifestMediaType">imageManifestMediaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imagePushedAt">imagePushedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageSizeInBytes">imageSizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageTags">imageTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages">DataAwsEcrpublicImagesImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactMediaType`<sup>Required</sup> <a name="artifactMediaType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.artifactMediaType"></a>

```java
public java.lang.String getArtifactMediaType();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `imageManifestMediaType`<sup>Required</sup> <a name="imageManifestMediaType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageManifestMediaType"></a>

```java
public java.lang.String getImageManifestMediaType();
```

- *Type:* java.lang.String

---

##### `imagePushedAt`<sup>Required</sup> <a name="imagePushedAt" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imagePushedAt"></a>

```java
public java.lang.String getImagePushedAt();
```

- *Type:* java.lang.String

---

##### `imageSizeInBytes`<sup>Required</sup> <a name="imageSizeInBytes" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageSizeInBytes"></a>

```java
public java.lang.Number getImageSizeInBytes();
```

- *Type:* java.lang.Number

---

##### `imageTags`<sup>Required</sup> <a name="imageTags" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageTags"></a>

```java
public java.util.List<java.lang.String> getImageTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.internalValue"></a>

```java
public DataAwsEcrpublicImagesImages getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages">DataAwsEcrpublicImagesImages</a>

---



