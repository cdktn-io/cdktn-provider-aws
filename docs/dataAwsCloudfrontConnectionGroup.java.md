# `dataAwsCloudfrontConnectionGroup` Submodule <a name="`dataAwsCloudfrontConnectionGroup` Submodule" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontConnectionGroup <a name="DataAwsCloudfrontConnectionGroup" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/cloudfront_connection_group aws_cloudfront_connection_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_cloudfront_connection_group.DataAwsCloudfrontConnectionGroup;

DataAwsCloudfrontConnectionGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .routingEndpoint(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/cloudfront_connection_group#id DataAwsCloudfrontConnectionGroup#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.routingEndpoint">routingEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/cloudfront_connection_group#routing_endpoint DataAwsCloudfrontConnectionGroup#routing_endpoint}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/cloudfront_connection_group#id DataAwsCloudfrontConnectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingEndpoint`<sup>Optional</sup> <a name="routingEndpoint" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.routingEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/cloudfront_connection_group#routing_endpoint DataAwsCloudfrontConnectionGroup#routing_endpoint}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetRoutingEndpoint">resetRoutingEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetId"></a>

```java
public void resetId()
```

##### `resetRoutingEndpoint` <a name="resetRoutingEndpoint" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetRoutingEndpoint"></a>

```java
public void resetRoutingEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsCloudfrontConnectionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_cloudfront_connection_group.DataAwsCloudfrontConnectionGroup;

DataAwsCloudfrontConnectionGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_cloudfront_connection_group.DataAwsCloudfrontConnectionGroup;

DataAwsCloudfrontConnectionGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_cloudfront_connection_group.DataAwsCloudfrontConnectionGroup;

DataAwsCloudfrontConnectionGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_cloudfront_connection_group.DataAwsCloudfrontConnectionGroup;

DataAwsCloudfrontConnectionGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsCloudfrontConnectionGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsCloudfrontConnectionGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsCloudfrontConnectionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsCloudfrontConnectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/cloudfront_connection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsCloudfrontConnectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.anycastIpListId">anycastIpListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.ipv6Enabled">ipv6Enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.routingEndpointInput">routingEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.routingEndpoint">routingEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `anycastIpListId`<sup>Required</sup> <a name="anycastIpListId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.anycastIpListId"></a>

```java
public java.lang.String getAnycastIpListId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `ipv6Enabled`<sup>Required</sup> <a name="ipv6Enabled" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.ipv6Enabled"></a>

```java
public IResolvable getIpv6Enabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `routingEndpointInput`<sup>Optional</sup> <a name="routingEndpointInput" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.routingEndpointInput"></a>

```java
public java.lang.String getRoutingEndpointInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `routingEndpoint`<sup>Required</sup> <a name="routingEndpoint" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.routingEndpoint"></a>

```java
public java.lang.String getRoutingEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontConnectionGroupConfig <a name="DataAwsCloudfrontConnectionGroupConfig" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_cloudfront_connection_group.DataAwsCloudfrontConnectionGroupConfig;

DataAwsCloudfrontConnectionGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .routingEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/cloudfront_connection_group#id DataAwsCloudfrontConnectionGroup#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.routingEndpoint">routingEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/cloudfront_connection_group#routing_endpoint DataAwsCloudfrontConnectionGroup#routing_endpoint}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/cloudfront_connection_group#id DataAwsCloudfrontConnectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingEndpoint`<sup>Optional</sup> <a name="routingEndpoint" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.routingEndpoint"></a>

```java
public java.lang.String getRoutingEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/cloudfront_connection_group#routing_endpoint DataAwsCloudfrontConnectionGroup#routing_endpoint}.

---



