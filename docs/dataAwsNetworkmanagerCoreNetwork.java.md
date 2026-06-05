# `dataAwsNetworkmanagerCoreNetwork` Submodule <a name="`dataAwsNetworkmanagerCoreNetwork` Submodule" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkmanagerCoreNetwork <a name="DataAwsNetworkmanagerCoreNetwork" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/networkmanager_core_network aws_networkmanager_core_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetwork;

DataAwsNetworkmanagerCoreNetwork.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .coreNetworkId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/networkmanager_core_network#core_network_id DataAwsNetworkmanagerCoreNetwork#core_network_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.coreNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/networkmanager_core_network#core_network_id DataAwsNetworkmanagerCoreNetwork#core_network_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsNetworkmanagerCoreNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetwork;

DataAwsNetworkmanagerCoreNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetwork;

DataAwsNetworkmanagerCoreNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetwork;

DataAwsNetworkmanagerCoreNetwork.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetwork;

DataAwsNetworkmanagerCoreNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsNetworkmanagerCoreNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsNetworkmanagerCoreNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsNetworkmanagerCoreNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsNetworkmanagerCoreNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/networkmanager_core_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsNetworkmanagerCoreNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.edges">edges</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList">DataAwsNetworkmanagerCoreNetworkEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.networkFunctionGroups">networkFunctionGroups</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.segments">segments</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList">DataAwsNetworkmanagerCoreNetworkSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `edges`<sup>Required</sup> <a name="edges" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.edges"></a>

```java
public DataAwsNetworkmanagerCoreNetworkEdgesList getEdges();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList">DataAwsNetworkmanagerCoreNetworkEdgesList</a>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

---

##### `networkFunctionGroups`<sup>Required</sup> <a name="networkFunctionGroups" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.networkFunctionGroups"></a>

```java
public DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList getNetworkFunctionGroups();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList</a>

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.segments"></a>

```java
public DataAwsNetworkmanagerCoreNetworkSegmentsList getSegments();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList">DataAwsNetworkmanagerCoreNetworkSegmentsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.coreNetworkIdInput"></a>

```java
public java.lang.String getCoreNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.coreNetworkId"></a>

```java
public java.lang.String getCoreNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkmanagerCoreNetworkConfig <a name="DataAwsNetworkmanagerCoreNetworkConfig" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkConfig;

DataAwsNetworkmanagerCoreNetworkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .coreNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/networkmanager_core_network#core_network_id DataAwsNetworkmanagerCoreNetwork#core_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.coreNetworkId"></a>

```java
public java.lang.String getCoreNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/networkmanager_core_network#core_network_id DataAwsNetworkmanagerCoreNetwork#core_network_id}.

---

### DataAwsNetworkmanagerCoreNetworkEdges <a name="DataAwsNetworkmanagerCoreNetworkEdges" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdges.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkEdges;

DataAwsNetworkmanagerCoreNetworkEdges.builder()
    .build();
```


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups;

DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups.builder()
    .build();
```


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments;

DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments.builder()
    .build();
```


### DataAwsNetworkmanagerCoreNetworkSegments <a name="DataAwsNetworkmanagerCoreNetworkSegments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegments.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkSegments;

DataAwsNetworkmanagerCoreNetworkSegments.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsNetworkmanagerCoreNetworkEdgesList <a name="DataAwsNetworkmanagerCoreNetworkEdgesList" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkEdgesList;

new DataAwsNetworkmanagerCoreNetworkEdgesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.get"></a>

```java
public DataAwsNetworkmanagerCoreNetworkEdgesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsNetworkmanagerCoreNetworkEdgesOutputReference <a name="DataAwsNetworkmanagerCoreNetworkEdgesOutputReference" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference;

new DataAwsNetworkmanagerCoreNetworkEdgesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.asn">asn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation">edgeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdges">DataAwsNetworkmanagerCoreNetworkEdges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation"></a>

```java
public java.lang.String getEdgeLocation();
```

- *Type:* java.lang.String

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue"></a>

```java
public DataAwsNetworkmanagerCoreNetworkEdges getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdges">DataAwsNetworkmanagerCoreNetworkEdges</a>

---


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList;

new DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get"></a>

```java
public DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference;

new DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.edgeLocations">edgeLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.segments">segments</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.edgeLocations"></a>

```java
public java.util.List<java.lang.String> getEdgeLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.segments"></a>

```java
public DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList getSegments();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.internalValue"></a>

```java
public DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups</a>

---


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList;

new DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.get"></a>

```java
public DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference;

new DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendTo">sendTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendVia">sendVia</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sendTo`<sup>Required</sup> <a name="sendTo" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendTo"></a>

```java
public java.util.List<java.lang.String> getSendTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sendVia`<sup>Required</sup> <a name="sendVia" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendVia"></a>

```java
public java.util.List<java.lang.String> getSendVia();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.internalValue"></a>

```java
public DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments</a>

---


### DataAwsNetworkmanagerCoreNetworkSegmentsList <a name="DataAwsNetworkmanagerCoreNetworkSegmentsList" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkSegmentsList;

new DataAwsNetworkmanagerCoreNetworkSegmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.get"></a>

```java
public DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_networkmanager_core_network.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference;

new DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations">edgeLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments">sharedSegments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegments">DataAwsNetworkmanagerCoreNetworkSegments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations"></a>

```java
public java.util.List<java.lang.String> getEdgeLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sharedSegments`<sup>Required</sup> <a name="sharedSegments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments"></a>

```java
public java.util.List<java.lang.String> getSharedSegments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue"></a>

```java
public DataAwsNetworkmanagerCoreNetworkSegments getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegments">DataAwsNetworkmanagerCoreNetworkSegments</a>

---



