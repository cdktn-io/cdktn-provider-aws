# `dataAwsAgentregistryRegistry` Submodule <a name="`dataAwsAgentregistryRegistry` Submodule" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAgentregistryRegistry <a name="DataAwsAgentregistryRegistry" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry aws_agentregistry_registry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistry;

DataAwsAgentregistryRegistry.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .registryId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.registryId">registryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#registry_id DataAwsAgentregistryRegistry#registry_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.registryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#registry_id DataAwsAgentregistryRegistry#registry_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#region DataAwsAgentregistryRegistry#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsAgentregistryRegistry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistry;

DataAwsAgentregistryRegistry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistry;

DataAwsAgentregistryRegistry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistry;

DataAwsAgentregistryRegistry.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistry;

DataAwsAgentregistryRegistry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsAgentregistryRegistry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsAgentregistryRegistry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsAgentregistryRegistry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsAgentregistryRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAgentregistryRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.approvalConfiguration">approvalConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList">DataAwsAgentregistryRegistryApprovalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.discoveryConfiguration">discoveryConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList">DataAwsAgentregistryRegistryDiscoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList">DataAwsAgentregistryRegistryEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryArn">registryArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryIdInput">registryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `approvalConfiguration`<sup>Required</sup> <a name="approvalConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.approvalConfiguration"></a>

```java
public DataAwsAgentregistryRegistryApprovalConfigurationList getApprovalConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList">DataAwsAgentregistryRegistryApprovalConfigurationList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discoveryConfiguration`<sup>Required</sup> <a name="discoveryConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.discoveryConfiguration"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationList getDiscoveryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList">DataAwsAgentregistryRegistryDiscoveryConfigurationList</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.encryptionConfiguration"></a>

```java
public DataAwsAgentregistryRegistryEncryptionConfigurationList getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList">DataAwsAgentregistryRegistryEncryptionConfigurationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryArn"></a>

```java
public java.lang.String getRegistryArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `registryIdInput`<sup>Optional</sup> <a name="registryIdInput" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryIdInput"></a>

```java
public java.lang.String getRegistryIdInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAgentregistryRegistryApprovalConfiguration <a name="DataAwsAgentregistryRegistryApprovalConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryApprovalConfiguration;

DataAwsAgentregistryRegistryApprovalConfiguration.builder()
    .build();
```


### DataAwsAgentregistryRegistryConfig <a name="DataAwsAgentregistryRegistryConfig" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryConfig;

DataAwsAgentregistryRegistryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .registryId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.registryId">registryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#registry_id DataAwsAgentregistryRegistry#registry_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#registry_id DataAwsAgentregistryRegistry#registry_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#region DataAwsAgentregistryRegistry#region}

---

### DataAwsAgentregistryRegistryDiscoveryConfiguration <a name="DataAwsAgentregistryRegistryDiscoveryConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfiguration;

DataAwsAgentregistryRegistryDiscoveryConfiguration.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource.builder()
    .build();
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource;

DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.builder()
    .build();
```


### DataAwsAgentregistryRegistryEncryptionConfiguration <a name="DataAwsAgentregistryRegistryEncryptionConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryEncryptionConfiguration;

DataAwsAgentregistryRegistryEncryptionConfiguration.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAgentregistryRegistryApprovalConfigurationList <a name="DataAwsAgentregistryRegistryApprovalConfigurationList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryApprovalConfigurationList;

new DataAwsAgentregistryRegistryApprovalConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.get"></a>

```java
public DataAwsAgentregistryRegistryApprovalConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryApprovalConfigurationOutputReference <a name="DataAwsAgentregistryRegistryApprovalConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference;

new DataAwsAgentregistryRegistryApprovalConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.autoApprovalRules">autoApprovalRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfiguration">DataAwsAgentregistryRegistryApprovalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoApprovalRules`<sup>Required</sup> <a name="autoApprovalRules" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.autoApprovalRules"></a>

```java
public java.util.List<java.lang.String> getAutoApprovalRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryApprovalConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfiguration">DataAwsAgentregistryRegistryApprovalConfiguration</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">matchValueString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">matchValueStringList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValueString`<sup>Required</sup> <a name="matchValueString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```java
public java.lang.String getMatchValueString();
```

- *Type:* java.lang.String

---

##### `matchValueStringList`<sup>Required</sup> <a name="matchValueStringList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```java
public java.util.List<java.lang.String> getMatchValueStringList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">claimMatchOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">claimMatchValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `claimMatchOperator`<sup>Required</sup> <a name="claimMatchOperator" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```java
public java.lang.String getClaimMatchOperator();
```

- *Type:* java.lang.String

---

##### `claimMatchValue`<sup>Required</sup> <a name="claimMatchValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList getClaimMatchValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizingClaimMatchValue`<sup>Required</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList getAuthorizingClaimMatchValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList</a>

---

##### `inboundTokenClaimName`<sup>Required</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimName"></a>

```java
public java.lang.String getInboundTokenClaimName();
```

- *Type:* java.lang.String

---

##### `inboundTokenClaimValueType`<sup>Required</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueType"></a>

```java
public java.lang.String getInboundTokenClaimValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowedAudience</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">allowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaim">customClaim</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverride">privateEndpointOverride</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAudience`<sup>Required</sup> <a name="allowedAudience" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```java
public java.util.List<java.lang.String> getAllowedAudience();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customClaim`<sup>Required</sup> <a name="customClaim" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaim"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList getCustomClaim();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList</a>

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList getPrivateEndpoint();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList</a>

---

##### `privateEndpointOverride`<sup>Required</sup> <a name="privateEndpointOverride" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverride"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList getPrivateEndpointOverride();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">routingDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">vpcIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointIpAddressType`<sup>Required</sup> <a name="endpointIpAddressType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```java
public java.lang.String getEndpointIpAddressType();
```

- *Type:* java.lang.String

---

##### `routingDomain`<sup>Required</sup> <a name="routingDomain" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```java
public java.lang.String getRoutingDomain();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```java
public java.lang.String getVpcIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource">managedVpcResource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource">selfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedVpcResource`<sup>Required</sup> <a name="managedVpcResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList getManagedVpcResource();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList</a>

---

##### `selfManagedLatticeResource`<sup>Required</sup> <a name="selfManagedLatticeResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList getSelfManagedLatticeResource();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.privateEndpoint"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList getPrivateEndpoint();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">routingDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">vpcIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointIpAddressType`<sup>Required</sup> <a name="endpointIpAddressType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```java
public java.lang.String getEndpointIpAddressType();
```

- *Type:* java.lang.String

---

##### `routingDomain`<sup>Required</sup> <a name="routingDomain" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```java
public java.lang.String getRoutingDomain();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```java
public java.lang.String getVpcIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.managedVpcResource">managedVpcResource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.selfManagedLatticeResource">selfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedVpcResource`<sup>Required</sup> <a name="managedVpcResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.managedVpcResource"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList getManagedVpcResource();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList</a>

---

##### `selfManagedLatticeResource`<sup>Required</sup> <a name="selfManagedLatticeResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList getSelfManagedLatticeResource();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```java
public java.lang.String getResourceConfigurationIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```java
public java.lang.String getResourceConfigurationIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customJwtAuthorizer`<sup>Required</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList getCustomJwtAuthorizer();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationList;

new DataAwsAgentregistryRegistryDiscoveryConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.get"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference;

new DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerType">authorizerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfiguration">DataAwsAgentregistryRegistryDiscoveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizerConfiguration`<sup>Required</sup> <a name="authorizerConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerConfiguration"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList getAuthorizerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList</a>

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerType"></a>

```java
public java.lang.String getAuthorizerType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryDiscoveryConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfiguration">DataAwsAgentregistryRegistryDiscoveryConfiguration</a>

---


### DataAwsAgentregistryRegistryEncryptionConfigurationList <a name="DataAwsAgentregistryRegistryEncryptionConfigurationList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryEncryptionConfigurationList;

new DataAwsAgentregistryRegistryEncryptionConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.get"></a>

```java
public DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference <a name="DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_agentregistry_registry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference;

new DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfiguration">DataAwsAgentregistryRegistryEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsAgentregistryRegistryEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfiguration">DataAwsAgentregistryRegistryEncryptionConfiguration</a>

---



