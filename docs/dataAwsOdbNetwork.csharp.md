# `dataAwsOdbNetwork` Submodule <a name="`dataAwsOdbNetwork` Submodule" id="@cdktn/provider-aws.dataAwsOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbNetwork <a name="DataAwsOdbNetwork" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/odb_network aws_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetwork(Construct Scope, string Id, DataAwsOdbNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig">DataAwsOdbNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig">DataAwsOdbNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOdbNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbNetwork.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsOdbNetwork resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/odb_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.clientSubnetCidr">ClientSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.customDomainName">CustomDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.defaultDnsPrefix">DefaultDnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.managedServices">ManagedServices</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList">DataAwsOdbNetworkManagedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociDnsForwardingConfigs">OciDnsForwardingConfigs</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList">DataAwsOdbNetworkOciDnsForwardingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociNetworkAnchorId">OciNetworkAnchorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociNetworkAnchorUrl">OciNetworkAnchorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociVcnId">OciVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociVcnUrl">OciVcnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.peeredCidrs">PeeredCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.percentProgress">PercentProgress</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `BackupSubnetCidr`<sup>Required</sup> <a name="BackupSubnetCidr" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.backupSubnetCidr"></a>

```csharp
public string BackupSubnetCidr { get; }
```

- *Type:* string

---

##### `ClientSubnetCidr`<sup>Required</sup> <a name="ClientSubnetCidr" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.clientSubnetCidr"></a>

```csharp
public string ClientSubnetCidr { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.customDomainName"></a>

```csharp
public string CustomDomainName { get; }
```

- *Type:* string

---

##### `DefaultDnsPrefix`<sup>Required</sup> <a name="DefaultDnsPrefix" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.defaultDnsPrefix"></a>

```csharp
public string DefaultDnsPrefix { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ManagedServices`<sup>Required</sup> <a name="ManagedServices" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.managedServices"></a>

```csharp
public DataAwsOdbNetworkManagedServicesList ManagedServices { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList">DataAwsOdbNetworkManagedServicesList</a>

---

##### `OciDnsForwardingConfigs`<sup>Required</sup> <a name="OciDnsForwardingConfigs" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociDnsForwardingConfigs"></a>

```csharp
public DataAwsOdbNetworkOciDnsForwardingConfigsList OciDnsForwardingConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList">DataAwsOdbNetworkOciDnsForwardingConfigsList</a>

---

##### `OciNetworkAnchorId`<sup>Required</sup> <a name="OciNetworkAnchorId" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociNetworkAnchorId"></a>

```csharp
public string OciNetworkAnchorId { get; }
```

- *Type:* string

---

##### `OciNetworkAnchorUrl`<sup>Required</sup> <a name="OciNetworkAnchorUrl" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociNetworkAnchorUrl"></a>

```csharp
public string OciNetworkAnchorUrl { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciVcnId`<sup>Required</sup> <a name="OciVcnId" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociVcnId"></a>

```csharp
public string OciVcnId { get; }
```

- *Type:* string

---

##### `OciVcnUrl`<sup>Required</sup> <a name="OciVcnUrl" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.ociVcnUrl"></a>

```csharp
public string OciVcnUrl { get; }
```

- *Type:* string

---

##### `PeeredCidrs`<sup>Required</sup> <a name="PeeredCidrs" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.peeredCidrs"></a>

```csharp
public string[] PeeredCidrs { get; }
```

- *Type:* string[]

---

##### `PercentProgress`<sup>Required</sup> <a name="PercentProgress" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.percentProgress"></a>

```csharp
public double PercentProgress { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbNetworkConfig <a name="DataAwsOdbNetworkConfig" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/odb_network#id DataAwsOdbNetwork#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/odb_network#id DataAwsOdbNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/odb_network#region DataAwsOdbNetwork#region}

---

### DataAwsOdbNetworkManagedServices <a name="DataAwsOdbNetworkManagedServices" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServices {

};
```


### DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess <a name="DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess {

};
```


### DataAwsOdbNetworkManagedServicesKmsAccess <a name="DataAwsOdbNetworkManagedServicesKmsAccess" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesKmsAccess {

};
```


### DataAwsOdbNetworkManagedServicesManagedS3BackupAccess <a name="DataAwsOdbNetworkManagedServicesManagedS3BackupAccess" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesManagedS3BackupAccess {

};
```


### DataAwsOdbNetworkManagedServicesS3Access <a name="DataAwsOdbNetworkManagedServicesS3Access" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3Access"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3Access.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesS3Access {

};
```


### DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint <a name="DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint {

};
```


### DataAwsOdbNetworkManagedServicesStsAccess <a name="DataAwsOdbNetworkManagedServicesStsAccess" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesStsAccess {

};
```


### DataAwsOdbNetworkManagedServicesZeroTlAccess <a name="DataAwsOdbNetworkManagedServicesZeroTlAccess" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesZeroTlAccess {

};
```


### DataAwsOdbNetworkOciDnsForwardingConfigs <a name="DataAwsOdbNetworkOciDnsForwardingConfigs" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkOciDnsForwardingConfigs {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList <a name="DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get"></a>

```csharp
private DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference <a name="DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a>

---


### DataAwsOdbNetworkManagedServicesKmsAccessList <a name="DataAwsOdbNetworkManagedServicesKmsAccessList" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesKmsAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.get"></a>

```csharp
private DataAwsOdbNetworkManagedServicesKmsAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbNetworkManagedServicesKmsAccessOutputReference <a name="DataAwsOdbNetworkManagedServicesKmsAccessOutputReference" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesKmsAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument">KmsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccess">DataAwsOdbNetworkManagedServicesKmsAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `KmsPolicyDocument`<sup>Required</sup> <a name="KmsPolicyDocument" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument"></a>

```csharp
public string KmsPolicyDocument { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbNetworkManagedServicesKmsAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccess">DataAwsOdbNetworkManagedServicesKmsAccess</a>

---


### DataAwsOdbNetworkManagedServicesList <a name="DataAwsOdbNetworkManagedServicesList" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.get"></a>

```csharp
private DataAwsOdbNetworkManagedServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList <a name="DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.get"></a>

```csharp
private DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference <a name="DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccess">DataAwsOdbNetworkManagedServicesManagedS3BackupAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbNetworkManagedServicesManagedS3BackupAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccess">DataAwsOdbNetworkManagedServicesManagedS3BackupAccess</a>

---


### DataAwsOdbNetworkManagedServicesOutputReference <a name="DataAwsOdbNetworkManagedServicesOutputReference" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess">CrossRegionS3RestoreSourcesAccess</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.kmsAccess">KmsAccess</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList">DataAwsOdbNetworkManagedServicesKmsAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess">ManagedS3BackupAccess</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList">DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.managedServiceIpv4Cidrs">ManagedServiceIpv4Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn">ResourceGatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.s3Access">S3Access</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList">DataAwsOdbNetworkManagedServicesS3AccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn">ServiceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint">ServiceNetworkEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList">DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.stsAccess">StsAccess</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList">DataAwsOdbNetworkManagedServicesStsAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.zeroTlAccess">ZeroTlAccess</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList">DataAwsOdbNetworkManagedServicesZeroTlAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServices">DataAwsOdbNetworkManagedServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossRegionS3RestoreSourcesAccess`<sup>Required</sup> <a name="CrossRegionS3RestoreSourcesAccess" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess"></a>

```csharp
public DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList CrossRegionS3RestoreSourcesAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">DataAwsOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a>

---

##### `KmsAccess`<sup>Required</sup> <a name="KmsAccess" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.kmsAccess"></a>

```csharp
public DataAwsOdbNetworkManagedServicesKmsAccessList KmsAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesKmsAccessList">DataAwsOdbNetworkManagedServicesKmsAccessList</a>

---

##### `ManagedS3BackupAccess`<sup>Required</sup> <a name="ManagedS3BackupAccess" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess"></a>

```csharp
public DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList ManagedS3BackupAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList">DataAwsOdbNetworkManagedServicesManagedS3BackupAccessList</a>

---

##### `ManagedServiceIpv4Cidrs`<sup>Required</sup> <a name="ManagedServiceIpv4Cidrs" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.managedServiceIpv4Cidrs"></a>

```csharp
public string[] ManagedServiceIpv4Cidrs { get; }
```

- *Type:* string[]

---

##### `ResourceGatewayArn`<sup>Required</sup> <a name="ResourceGatewayArn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn"></a>

```csharp
public string ResourceGatewayArn { get; }
```

- *Type:* string

---

##### `S3Access`<sup>Required</sup> <a name="S3Access" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.s3Access"></a>

```csharp
public DataAwsOdbNetworkManagedServicesS3AccessList S3Access { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList">DataAwsOdbNetworkManagedServicesS3AccessList</a>

---

##### `ServiceNetworkArn`<sup>Required</sup> <a name="ServiceNetworkArn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn"></a>

```csharp
public string ServiceNetworkArn { get; }
```

- *Type:* string

---

##### `ServiceNetworkEndpoint`<sup>Required</sup> <a name="ServiceNetworkEndpoint" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint"></a>

```csharp
public DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList ServiceNetworkEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList">DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList</a>

---

##### `StsAccess`<sup>Required</sup> <a name="StsAccess" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.stsAccess"></a>

```csharp
public DataAwsOdbNetworkManagedServicesStsAccessList StsAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList">DataAwsOdbNetworkManagedServicesStsAccessList</a>

---

##### `ZeroTlAccess`<sup>Required</sup> <a name="ZeroTlAccess" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.zeroTlAccess"></a>

```csharp
public DataAwsOdbNetworkManagedServicesZeroTlAccessList ZeroTlAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList">DataAwsOdbNetworkManagedServicesZeroTlAccessList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbNetworkManagedServices InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServices">DataAwsOdbNetworkManagedServices</a>

---


### DataAwsOdbNetworkManagedServicesS3AccessList <a name="DataAwsOdbNetworkManagedServicesS3AccessList" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesS3AccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.get"></a>

```csharp
private DataAwsOdbNetworkManagedServicesS3AccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbNetworkManagedServicesS3AccessOutputReference <a name="DataAwsOdbNetworkManagedServicesS3AccessOutputReference" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesS3AccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument">S3PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3Access">DataAwsOdbNetworkManagedServicesS3Access</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `S3PolicyDocument`<sup>Required</sup> <a name="S3PolicyDocument" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument"></a>

```csharp
public string S3PolicyDocument { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbNetworkManagedServicesS3Access InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesS3Access">DataAwsOdbNetworkManagedServicesS3Access</a>

---


### DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList <a name="DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.get"></a>

```csharp
private DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference <a name="DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType">VpcEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint">DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcEndpointType`<sup>Required</sup> <a name="VpcEndpointType" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType"></a>

```csharp
public string VpcEndpointType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint">DataAwsOdbNetworkManagedServicesServiceNetworkEndpoint</a>

---


### DataAwsOdbNetworkManagedServicesStsAccessList <a name="DataAwsOdbNetworkManagedServicesStsAccessList" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesStsAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.get"></a>

```csharp
private DataAwsOdbNetworkManagedServicesStsAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbNetworkManagedServicesStsAccessOutputReference <a name="DataAwsOdbNetworkManagedServicesStsAccessOutputReference" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesStsAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument">StsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccess">DataAwsOdbNetworkManagedServicesStsAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StsPolicyDocument`<sup>Required</sup> <a name="StsPolicyDocument" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument"></a>

```csharp
public string StsPolicyDocument { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbNetworkManagedServicesStsAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesStsAccess">DataAwsOdbNetworkManagedServicesStsAccess</a>

---


### DataAwsOdbNetworkManagedServicesZeroTlAccessList <a name="DataAwsOdbNetworkManagedServicesZeroTlAccessList" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesZeroTlAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.get"></a>

```csharp
private DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference <a name="DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccess">DataAwsOdbNetworkManagedServicesZeroTlAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbNetworkManagedServicesZeroTlAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkManagedServicesZeroTlAccess">DataAwsOdbNetworkManagedServicesZeroTlAccess</a>

---


### DataAwsOdbNetworkOciDnsForwardingConfigsList <a name="DataAwsOdbNetworkOciDnsForwardingConfigsList" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkOciDnsForwardingConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.get"></a>

```csharp
private DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference <a name="DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.ociDnsListenerIp">OciDnsListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigs">DataAwsOdbNetworkOciDnsForwardingConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `OciDnsListenerIp`<sup>Required</sup> <a name="OciDnsListenerIp" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.ociDnsListenerIp"></a>

```csharp
public string OciDnsListenerIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigsOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbNetworkOciDnsForwardingConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbNetwork.DataAwsOdbNetworkOciDnsForwardingConfigs">DataAwsOdbNetworkOciDnsForwardingConfigs</a>

---



