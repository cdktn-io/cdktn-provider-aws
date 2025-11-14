# `dataAwsEcsService` Submodule <a name="`dataAwsEcsService` Submodule" id="@cdktf/provider-aws.dataAwsEcsService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcsService <a name="DataAwsEcsService" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service aws_ecs_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsService;

DataAwsEcsService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterArn(java.lang.String)
    .serviceName(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#cluster_arn DataAwsEcsService#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#service_name DataAwsEcsService#service_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#id DataAwsEcsService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#tags DataAwsEcsService#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.clusterArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#cluster_arn DataAwsEcsService#cluster_arn}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#service_name DataAwsEcsService#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#id DataAwsEcsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#region DataAwsEcsService#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#tags DataAwsEcsService#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcsService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsService;

DataAwsEcsService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsService;

DataAwsEcsService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsService;

DataAwsEcsService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsService;

DataAwsEcsService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEcsService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsEcsService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEcsService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEcsService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcsService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.availabilityZoneRebalancing">availabilityZoneRebalancing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList">DataAwsEcsServiceCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList">DataAwsEcsServiceDeploymentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentController">deploymentController</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList">DataAwsEcsServiceDeploymentControllerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deployments">deployments</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList">DataAwsEcsServiceDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.desiredCount">desiredCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.events">events</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList">DataAwsEcsServiceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.healthCheckGracePeriodSeconds">healthCheckGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.iamRole">iamRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.launchType">launchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList">DataAwsEcsServiceLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList">DataAwsEcsServiceNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.orderedPlacementStrategy">orderedPlacementStrategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList">DataAwsEcsServiceOrderedPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.pendingCount">pendingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList">DataAwsEcsServicePlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformFamily">platformFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.runningCount">runningCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.schedulingStrategy">schedulingStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList">DataAwsEcsServiceServiceRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskSets">taskSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList">DataAwsEcsServiceTaskSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneRebalancing`<sup>Required</sup> <a name="availabilityZoneRebalancing" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.availabilityZoneRebalancing"></a>

```java
public java.lang.String getAvailabilityZoneRebalancing();
```

- *Type:* java.lang.String

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.capacityProviderStrategy"></a>

```java
public DataAwsEcsServiceCapacityProviderStrategyList getCapacityProviderStrategy();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList">DataAwsEcsServiceCapacityProviderStrategyList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentConfiguration"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationList getDeploymentConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList">DataAwsEcsServiceDeploymentConfigurationList</a>

---

##### `deploymentController`<sup>Required</sup> <a name="deploymentController" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentController"></a>

```java
public DataAwsEcsServiceDeploymentControllerList getDeploymentController();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList">DataAwsEcsServiceDeploymentControllerList</a>

---

##### `deployments`<sup>Required</sup> <a name="deployments" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deployments"></a>

```java
public DataAwsEcsServiceDeploymentsList getDeployments();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList">DataAwsEcsServiceDeploymentsList</a>

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.desiredCount"></a>

```java
public java.lang.Number getDesiredCount();
```

- *Type:* java.lang.Number

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableEcsManagedTags"></a>

```java
public IResolvable getEnableEcsManagedTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableExecuteCommand"></a>

```java
public IResolvable getEnableExecuteCommand();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.events"></a>

```java
public DataAwsEcsServiceEventsList getEvents();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList">DataAwsEcsServiceEventsList</a>

---

##### `healthCheckGracePeriodSeconds`<sup>Required</sup> <a name="healthCheckGracePeriodSeconds" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.healthCheckGracePeriodSeconds"></a>

```java
public java.lang.Number getHealthCheckGracePeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.iamRole"></a>

```java
public java.lang.String getIamRole();
```

- *Type:* java.lang.String

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.loadBalancer"></a>

```java
public DataAwsEcsServiceLoadBalancerList getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList">DataAwsEcsServiceLoadBalancerList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.networkConfiguration"></a>

```java
public DataAwsEcsServiceNetworkConfigurationList getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList">DataAwsEcsServiceNetworkConfigurationList</a>

---

##### `orderedPlacementStrategy`<sup>Required</sup> <a name="orderedPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.orderedPlacementStrategy"></a>

```java
public DataAwsEcsServiceOrderedPlacementStrategyList getOrderedPlacementStrategy();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList">DataAwsEcsServiceOrderedPlacementStrategyList</a>

---

##### `pendingCount`<sup>Required</sup> <a name="pendingCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.pendingCount"></a>

```java
public java.lang.Number getPendingCount();
```

- *Type:* java.lang.Number

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.placementConstraints"></a>

```java
public DataAwsEcsServicePlacementConstraintsList getPlacementConstraints();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList">DataAwsEcsServicePlacementConstraintsList</a>

---

##### `platformFamily`<sup>Required</sup> <a name="platformFamily" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformFamily"></a>

```java
public java.lang.String getPlatformFamily();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

##### `runningCount`<sup>Required</sup> <a name="runningCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.runningCount"></a>

```java
public java.lang.Number getRunningCount();
```

- *Type:* java.lang.Number

---

##### `schedulingStrategy`<sup>Required</sup> <a name="schedulingStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.schedulingStrategy"></a>

```java
public java.lang.String getSchedulingStrategy();
```

- *Type:* java.lang.String

---

##### `serviceRegistries`<sup>Required</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceRegistries"></a>

```java
public DataAwsEcsServiceServiceRegistriesList getServiceRegistries();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList">DataAwsEcsServiceServiceRegistriesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

---

##### `taskSets`<sup>Required</sup> <a name="taskSets" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskSets"></a>

```java
public DataAwsEcsServiceTaskSetsList getTaskSets();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList">DataAwsEcsServiceTaskSetsList</a>

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcsServiceCapacityProviderStrategy <a name="DataAwsEcsServiceCapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceCapacityProviderStrategy;

DataAwsEcsServiceCapacityProviderStrategy.builder()
    .build();
```


### DataAwsEcsServiceConfig <a name="DataAwsEcsServiceConfig" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceConfig;

DataAwsEcsServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterArn(java.lang.String)
    .serviceName(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#cluster_arn DataAwsEcsService#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#service_name DataAwsEcsService#service_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#id DataAwsEcsService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#tags DataAwsEcsService#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#cluster_arn DataAwsEcsService#cluster_arn}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#service_name DataAwsEcsService#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#id DataAwsEcsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#region DataAwsEcsService#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#tags DataAwsEcsService#tags}.

---

### DataAwsEcsServiceDeploymentConfiguration <a name="DataAwsEcsServiceDeploymentConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfiguration;

DataAwsEcsServiceDeploymentConfiguration.builder()
    .build();
```


### DataAwsEcsServiceDeploymentConfigurationAlarms <a name="DataAwsEcsServiceDeploymentConfigurationAlarms" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationAlarms;

DataAwsEcsServiceDeploymentConfigurationAlarms.builder()
    .build();
```


### DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration <a name="DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration;

DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration.builder()
    .build();
```


### DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker <a name="DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker;

DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker.builder()
    .build();
```


### DataAwsEcsServiceDeploymentConfigurationLifecycleHook <a name="DataAwsEcsServiceDeploymentConfigurationLifecycleHook" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationLifecycleHook;

DataAwsEcsServiceDeploymentConfigurationLifecycleHook.builder()
    .build();
```


### DataAwsEcsServiceDeploymentConfigurationLinearConfiguration <a name="DataAwsEcsServiceDeploymentConfigurationLinearConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration;

DataAwsEcsServiceDeploymentConfigurationLinearConfiguration.builder()
    .build();
```


### DataAwsEcsServiceDeploymentController <a name="DataAwsEcsServiceDeploymentController" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentController;

DataAwsEcsServiceDeploymentController.builder()
    .build();
```


### DataAwsEcsServiceDeployments <a name="DataAwsEcsServiceDeployments" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeployments;

DataAwsEcsServiceDeployments.builder()
    .build();
```


### DataAwsEcsServiceEvents <a name="DataAwsEcsServiceEvents" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceEvents;

DataAwsEcsServiceEvents.builder()
    .build();
```


### DataAwsEcsServiceLoadBalancer <a name="DataAwsEcsServiceLoadBalancer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceLoadBalancer;

DataAwsEcsServiceLoadBalancer.builder()
    .build();
```


### DataAwsEcsServiceLoadBalancerAdvancedConfiguration <a name="DataAwsEcsServiceLoadBalancerAdvancedConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceLoadBalancerAdvancedConfiguration;

DataAwsEcsServiceLoadBalancerAdvancedConfiguration.builder()
    .build();
```


### DataAwsEcsServiceNetworkConfiguration <a name="DataAwsEcsServiceNetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceNetworkConfiguration;

DataAwsEcsServiceNetworkConfiguration.builder()
    .build();
```


### DataAwsEcsServiceOrderedPlacementStrategy <a name="DataAwsEcsServiceOrderedPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceOrderedPlacementStrategy;

DataAwsEcsServiceOrderedPlacementStrategy.builder()
    .build();
```


### DataAwsEcsServicePlacementConstraints <a name="DataAwsEcsServicePlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServicePlacementConstraints;

DataAwsEcsServicePlacementConstraints.builder()
    .build();
```


### DataAwsEcsServiceServiceRegistries <a name="DataAwsEcsServiceServiceRegistries" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceServiceRegistries;

DataAwsEcsServiceServiceRegistries.builder()
    .build();
```


### DataAwsEcsServiceTaskSets <a name="DataAwsEcsServiceTaskSets" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceTaskSets;

DataAwsEcsServiceTaskSets.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcsServiceCapacityProviderStrategyList <a name="DataAwsEcsServiceCapacityProviderStrategyList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceCapacityProviderStrategyList;

new DataAwsEcsServiceCapacityProviderStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.get"></a>

```java
public DataAwsEcsServiceCapacityProviderStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceCapacityProviderStrategyOutputReference <a name="DataAwsEcsServiceCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceCapacityProviderStrategyOutputReference;

new DataAwsEcsServiceCapacityProviderStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy">DataAwsEcsServiceCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceCapacityProviderStrategy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy">DataAwsEcsServiceCapacityProviderStrategy</a>

---


### DataAwsEcsServiceDeploymentConfigurationAlarmsList <a name="DataAwsEcsServiceDeploymentConfigurationAlarmsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationAlarmsList;

new DataAwsEcsServiceDeploymentConfigurationAlarmsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.get"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference;

new DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.enable">enable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.rollback">rollback</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms">DataAwsEcsServiceDeploymentConfigurationAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.enable"></a>

```java
public IResolvable getEnable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.rollback"></a>

```java
public IResolvable getRollback();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationAlarms getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms">DataAwsEcsServiceDeploymentConfigurationAlarms</a>

---


### DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList <a name="DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList;

new DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.get"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference;

new DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryBakeTimeInMinutes">canaryBakeTimeInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryPercent">canaryPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration">DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canaryBakeTimeInMinutes`<sup>Required</sup> <a name="canaryBakeTimeInMinutes" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryBakeTimeInMinutes"></a>

```java
public java.lang.String getCanaryBakeTimeInMinutes();
```

- *Type:* java.lang.String

---

##### `canaryPercent`<sup>Required</sup> <a name="canaryPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryPercent"></a>

```java
public java.lang.Number getCanaryPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration">DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration</a>

---


### DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList <a name="DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList;

new DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.get"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference;

new DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.enable">enable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.rollback">rollback</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.enable"></a>

```java
public IResolvable getEnable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.rollback"></a>

```java
public IResolvable getRollback();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker</a>

---


### DataAwsEcsServiceDeploymentConfigurationLifecycleHookList <a name="DataAwsEcsServiceDeploymentConfigurationLifecycleHookList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList;

new DataAwsEcsServiceDeploymentConfigurationLifecycleHookList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.get"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference;

new DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookDetails">hookDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookTargetArn">hookTargetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.lifecycleStages">lifecycleStages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook">DataAwsEcsServiceDeploymentConfigurationLifecycleHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hookDetails`<sup>Required</sup> <a name="hookDetails" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookDetails"></a>

```java
public java.lang.String getHookDetails();
```

- *Type:* java.lang.String

---

##### `hookTargetArn`<sup>Required</sup> <a name="hookTargetArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookTargetArn"></a>

```java
public java.lang.String getHookTargetArn();
```

- *Type:* java.lang.String

---

##### `lifecycleStages`<sup>Required</sup> <a name="lifecycleStages" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.lifecycleStages"></a>

```java
public java.util.List<java.lang.String> getLifecycleStages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationLifecycleHook getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook">DataAwsEcsServiceDeploymentConfigurationLifecycleHook</a>

---


### DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList <a name="DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList;

new DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.get"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference;

new DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepBakeTimeInMinutes">stepBakeTimeInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepPercent">stepPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration">DataAwsEcsServiceDeploymentConfigurationLinearConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stepBakeTimeInMinutes`<sup>Required</sup> <a name="stepBakeTimeInMinutes" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepBakeTimeInMinutes"></a>

```java
public java.lang.String getStepBakeTimeInMinutes();
```

- *Type:* java.lang.String

---

##### `stepPercent`<sup>Required</sup> <a name="stepPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepPercent"></a>

```java
public java.lang.Number getStepPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationLinearConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration">DataAwsEcsServiceDeploymentConfigurationLinearConfiguration</a>

---


### DataAwsEcsServiceDeploymentConfigurationList <a name="DataAwsEcsServiceDeploymentConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationList;

new DataAwsEcsServiceDeploymentConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.get"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceDeploymentConfigurationOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentConfigurationOutputReference;

new DataAwsEcsServiceDeploymentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList">DataAwsEcsServiceDeploymentConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes">bakeTimeInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.canaryConfiguration">canaryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList">DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.deploymentCircuitBreaker">deploymentCircuitBreaker</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.lifecycleHook">lifecycleHook</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList">DataAwsEcsServiceDeploymentConfigurationLifecycleHookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.linearConfiguration">linearConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList">DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.maximumPercent">maximumPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.minimumHealthyPercent">minimumHealthyPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration">DataAwsEcsServiceDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.alarms"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationAlarmsList getAlarms();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList">DataAwsEcsServiceDeploymentConfigurationAlarmsList</a>

---

##### `bakeTimeInMinutes`<sup>Required</sup> <a name="bakeTimeInMinutes" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes"></a>

```java
public java.lang.String getBakeTimeInMinutes();
```

- *Type:* java.lang.String

---

##### `canaryConfiguration`<sup>Required</sup> <a name="canaryConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.canaryConfiguration"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList getCanaryConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList">DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList</a>

---

##### `deploymentCircuitBreaker`<sup>Required</sup> <a name="deploymentCircuitBreaker" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.deploymentCircuitBreaker"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList getDeploymentCircuitBreaker();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList</a>

---

##### `lifecycleHook`<sup>Required</sup> <a name="lifecycleHook" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.lifecycleHook"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationLifecycleHookList getLifecycleHook();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList">DataAwsEcsServiceDeploymentConfigurationLifecycleHookList</a>

---

##### `linearConfiguration`<sup>Required</sup> <a name="linearConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.linearConfiguration"></a>

```java
public DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList getLinearConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList">DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList</a>

---

##### `maximumPercent`<sup>Required</sup> <a name="maximumPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.maximumPercent"></a>

```java
public java.lang.Number getMaximumPercent();
```

- *Type:* java.lang.Number

---

##### `minimumHealthyPercent`<sup>Required</sup> <a name="minimumHealthyPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.minimumHealthyPercent"></a>

```java
public java.lang.Number getMinimumHealthyPercent();
```

- *Type:* java.lang.Number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceDeploymentConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration">DataAwsEcsServiceDeploymentConfiguration</a>

---


### DataAwsEcsServiceDeploymentControllerList <a name="DataAwsEcsServiceDeploymentControllerList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentControllerList;

new DataAwsEcsServiceDeploymentControllerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.get"></a>

```java
public DataAwsEcsServiceDeploymentControllerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceDeploymentControllerOutputReference <a name="DataAwsEcsServiceDeploymentControllerOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentControllerOutputReference;

new DataAwsEcsServiceDeploymentControllerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController">DataAwsEcsServiceDeploymentController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceDeploymentController getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController">DataAwsEcsServiceDeploymentController</a>

---


### DataAwsEcsServiceDeploymentsList <a name="DataAwsEcsServiceDeploymentsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentsList;

new DataAwsEcsServiceDeploymentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.get"></a>

```java
public DataAwsEcsServiceDeploymentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceDeploymentsOutputReference <a name="DataAwsEcsServiceDeploymentsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceDeploymentsOutputReference;

new DataAwsEcsServiceDeploymentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.desiredCount">desiredCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.pendingCount">pendingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.runningCount">runningCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments">DataAwsEcsServiceDeployments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.desiredCount"></a>

```java
public java.lang.Number getDesiredCount();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pendingCount`<sup>Required</sup> <a name="pendingCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.pendingCount"></a>

```java
public java.lang.Number getPendingCount();
```

- *Type:* java.lang.Number

---

##### `runningCount`<sup>Required</sup> <a name="runningCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.runningCount"></a>

```java
public java.lang.Number getRunningCount();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceDeployments getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments">DataAwsEcsServiceDeployments</a>

---


### DataAwsEcsServiceEventsList <a name="DataAwsEcsServiceEventsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceEventsList;

new DataAwsEcsServiceEventsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.get"></a>

```java
public DataAwsEcsServiceEventsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceEventsOutputReference <a name="DataAwsEcsServiceEventsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceEventsOutputReference;

new DataAwsEcsServiceEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents">DataAwsEcsServiceEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceEvents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents">DataAwsEcsServiceEvents</a>

---


### DataAwsEcsServiceLoadBalancerAdvancedConfigurationList <a name="DataAwsEcsServiceLoadBalancerAdvancedConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList;

new DataAwsEcsServiceLoadBalancerAdvancedConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.get"></a>

```java
public DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference <a name="DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference;

new DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.alternateTargetGroupArn">alternateTargetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.productionListenerRule">productionListenerRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.testListenerRule">testListenerRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration">DataAwsEcsServiceLoadBalancerAdvancedConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alternateTargetGroupArn`<sup>Required</sup> <a name="alternateTargetGroupArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.alternateTargetGroupArn"></a>

```java
public java.lang.String getAlternateTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `productionListenerRule`<sup>Required</sup> <a name="productionListenerRule" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.productionListenerRule"></a>

```java
public java.lang.String getProductionListenerRule();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `testListenerRule`<sup>Required</sup> <a name="testListenerRule" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.testListenerRule"></a>

```java
public java.lang.String getTestListenerRule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceLoadBalancerAdvancedConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration">DataAwsEcsServiceLoadBalancerAdvancedConfiguration</a>

---


### DataAwsEcsServiceLoadBalancerList <a name="DataAwsEcsServiceLoadBalancerList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceLoadBalancerList;

new DataAwsEcsServiceLoadBalancerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.get"></a>

```java
public DataAwsEcsServiceLoadBalancerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceLoadBalancerOutputReference <a name="DataAwsEcsServiceLoadBalancerOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceLoadBalancerOutputReference;

new DataAwsEcsServiceLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList">DataAwsEcsServiceLoadBalancerAdvancedConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.elbName">elbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer">DataAwsEcsServiceLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedConfiguration`<sup>Required</sup> <a name="advancedConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.advancedConfiguration"></a>

```java
public DataAwsEcsServiceLoadBalancerAdvancedConfigurationList getAdvancedConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList">DataAwsEcsServiceLoadBalancerAdvancedConfigurationList</a>

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `elbName`<sup>Required</sup> <a name="elbName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.elbName"></a>

```java
public java.lang.String getElbName();
```

- *Type:* java.lang.String

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceLoadBalancer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer">DataAwsEcsServiceLoadBalancer</a>

---


### DataAwsEcsServiceNetworkConfigurationList <a name="DataAwsEcsServiceNetworkConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceNetworkConfigurationList;

new DataAwsEcsServiceNetworkConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.get"></a>

```java
public DataAwsEcsServiceNetworkConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceNetworkConfigurationOutputReference <a name="DataAwsEcsServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceNetworkConfigurationOutputReference;

new DataAwsEcsServiceNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration">DataAwsEcsServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```java
public IResolvable getAssignPublicIp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration">DataAwsEcsServiceNetworkConfiguration</a>

---


### DataAwsEcsServiceOrderedPlacementStrategyList <a name="DataAwsEcsServiceOrderedPlacementStrategyList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceOrderedPlacementStrategyList;

new DataAwsEcsServiceOrderedPlacementStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.get"></a>

```java
public DataAwsEcsServiceOrderedPlacementStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceOrderedPlacementStrategyOutputReference <a name="DataAwsEcsServiceOrderedPlacementStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceOrderedPlacementStrategyOutputReference;

new DataAwsEcsServiceOrderedPlacementStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy">DataAwsEcsServiceOrderedPlacementStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceOrderedPlacementStrategy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy">DataAwsEcsServiceOrderedPlacementStrategy</a>

---


### DataAwsEcsServicePlacementConstraintsList <a name="DataAwsEcsServicePlacementConstraintsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServicePlacementConstraintsList;

new DataAwsEcsServicePlacementConstraintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.get"></a>

```java
public DataAwsEcsServicePlacementConstraintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServicePlacementConstraintsOutputReference <a name="DataAwsEcsServicePlacementConstraintsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServicePlacementConstraintsOutputReference;

new DataAwsEcsServicePlacementConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints">DataAwsEcsServicePlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServicePlacementConstraints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints">DataAwsEcsServicePlacementConstraints</a>

---


### DataAwsEcsServiceServiceRegistriesList <a name="DataAwsEcsServiceServiceRegistriesList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceServiceRegistriesList;

new DataAwsEcsServiceServiceRegistriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.get"></a>

```java
public DataAwsEcsServiceServiceRegistriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceServiceRegistriesOutputReference <a name="DataAwsEcsServiceServiceRegistriesOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceServiceRegistriesOutputReference;

new DataAwsEcsServiceServiceRegistriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.registryArn">registryArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries">DataAwsEcsServiceServiceRegistries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.registryArn"></a>

```java
public java.lang.String getRegistryArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceServiceRegistries getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries">DataAwsEcsServiceServiceRegistries</a>

---


### DataAwsEcsServiceTaskSetsList <a name="DataAwsEcsServiceTaskSetsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceTaskSetsList;

new DataAwsEcsServiceTaskSetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.get"></a>

```java
public DataAwsEcsServiceTaskSetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcsServiceTaskSetsOutputReference <a name="DataAwsEcsServiceTaskSetsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_service.DataAwsEcsServiceTaskSetsOutputReference;

new DataAwsEcsServiceTaskSetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.pendingCount">pendingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.runningCount">runningCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.stabilityStatus">stabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets">DataAwsEcsServiceTaskSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pendingCount`<sup>Required</sup> <a name="pendingCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.pendingCount"></a>

```java
public java.lang.Number getPendingCount();
```

- *Type:* java.lang.Number

---

##### `runningCount`<sup>Required</sup> <a name="runningCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.runningCount"></a>

```java
public java.lang.Number getRunningCount();
```

- *Type:* java.lang.Number

---

##### `stabilityStatus`<sup>Required</sup> <a name="stabilityStatus" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.stabilityStatus"></a>

```java
public java.lang.String getStabilityStatus();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.internalValue"></a>

```java
public DataAwsEcsServiceTaskSets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets">DataAwsEcsServiceTaskSets</a>

---



