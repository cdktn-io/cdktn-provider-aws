# `dataAwsAccountaccessEntitlements` Submodule <a name="`dataAwsAccountaccessEntitlements` Submodule" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAccountaccessEntitlements <a name="DataAwsAccountaccessEntitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements aws_accountaccess_entitlements}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlements(Construct Scope, string Id, DataAwsAccountaccessEntitlementsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig">DataAwsAccountaccessEntitlementsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig">DataAwsAccountaccessEntitlementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsAccountaccessEntitlementsFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsAccountaccessEntitlements resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsAccountaccessEntitlements.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsAccountaccessEntitlements.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsAccountaccessEntitlements.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsAccountaccessEntitlements.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsAccountaccessEntitlements resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAccountaccessEntitlements to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAccountaccessEntitlements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAccountaccessEntitlements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.entitlements">Entitlements</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList">DataAwsAccountaccessEntitlementsEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList">DataAwsAccountaccessEntitlementsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArnInput">ApplicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.entitlements"></a>

```csharp
public DataAwsAccountaccessEntitlementsEntitlementsList Entitlements { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList">DataAwsAccountaccessEntitlementsEntitlementsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filter"></a>

```csharp
public DataAwsAccountaccessEntitlementsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList">DataAwsAccountaccessEntitlementsFilterList</a>

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArnInput"></a>

```csharp
public string ApplicationArnInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filterInput"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAccountaccessEntitlementsConfig <a name="DataAwsAccountaccessEntitlementsConfig" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationArn,
    IResolvable|DataAwsAccountaccessEntitlementsFilter[] Filter = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#filter DataAwsAccountaccessEntitlements#filter}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#region DataAwsAccountaccessEntitlements#region}

---

### DataAwsAccountaccessEntitlementsEntitlements <a name="DataAwsAccountaccessEntitlementsEntitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlements {

};
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlement <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlement {

};
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole {

};
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal {

};
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter {

};
```


### DataAwsAccountaccessEntitlementsFilter <a name="DataAwsAccountaccessEntitlementsFilter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilter {
    IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRole[] PrincipalRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.property.principalRole">PrincipalRole</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]</code> | principal_role block. |

---

##### `PrincipalRole`<sup>Optional</sup> <a name="PrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.property.principalRole"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRole[] PrincipalRole { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]

principal_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#principal_role DataAwsAccountaccessEntitlements#principal_role}

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRole <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterPrincipalRole {
    string AccountId = null,
    IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[] Principal = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#account_id DataAwsAccountaccessEntitlements#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.principal">Principal</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]</code> | principal block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#role_arn DataAwsAccountaccessEntitlements#role_arn}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#account_id DataAwsAccountaccessEntitlements#account_id}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.principal"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[] Principal { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#principal DataAwsAccountaccessEntitlements#principal}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#role_arn DataAwsAccountaccessEntitlements#role_arn}.

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal {
    IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[] IdentityCenter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.property.identityCenter">IdentityCenter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]</code> | identity_center block. |

---

##### `IdentityCenter`<sup>Optional</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.property.identityCenter"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[] IdentityCenter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]

identity_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#identity_center DataAwsAccountaccessEntitlements#identity_center}

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter {
    string GroupId = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#group_id DataAwsAccountaccessEntitlements#group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#user_id DataAwsAccountaccessEntitlements#user_id}. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#group_id DataAwsAccountaccessEntitlements#group_id}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#user_id DataAwsAccountaccessEntitlements#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAccountaccessEntitlementsEntitlementsEntitlementList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get"></a>

```csharp
private DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.principalRole">PrincipalRole</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement">DataAwsAccountaccessEntitlementsEntitlementsEntitlement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalRole`<sup>Required</sup> <a name="PrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.principalRole"></a>

```csharp
public DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList PrincipalRole { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.internalValue"></a>

```csharp
public DataAwsAccountaccessEntitlementsEntitlementsEntitlement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement">DataAwsAccountaccessEntitlementsEntitlementsEntitlement</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get"></a>

```csharp
private DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.principal"></a>

```csharp
public DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.internalValue"></a>

```csharp
public DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get"></a>

```csharp
private DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```csharp
public DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get"></a>

```csharp
private DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter">IdentityCenter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityCenter`<sup>Required</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```csharp
public DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList IdentityCenter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```csharp
public DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsList <a name="DataAwsAccountaccessEntitlementsEntitlementsList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get"></a>

```csharp
private DataAwsAccountaccessEntitlementsEntitlementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAccountaccessEntitlementsEntitlementsOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsEntitlementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlement">Entitlement</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements">DataAwsAccountaccessEntitlementsEntitlements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Entitlement`<sup>Required</sup> <a name="Entitlement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlement"></a>

```csharp
public DataAwsAccountaccessEntitlementsEntitlementsEntitlementList Entitlement { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementList</a>

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.internalValue"></a>

```csharp
public DataAwsAccountaccessEntitlementsEntitlements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements">DataAwsAccountaccessEntitlementsEntitlements</a>

---


### DataAwsAccountaccessEntitlementsFilterList <a name="DataAwsAccountaccessEntitlementsFilterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get"></a>

```csharp
private DataAwsAccountaccessEntitlementsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]

---


### DataAwsAccountaccessEntitlementsFilterOutputReference <a name="DataAwsAccountaccessEntitlementsFilterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole">PutPrincipalRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resetPrincipalRole">ResetPrincipalRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipalRole` <a name="PutPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole"></a>

```csharp
private void PutPrincipalRole(IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRole[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]

---

##### `ResetPrincipalRole` <a name="ResetPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resetPrincipalRole"></a>

```csharp
private void ResetPrincipalRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRole">PrincipalRole</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList">DataAwsAccountaccessEntitlementsFilterPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRoleInput">PrincipalRoleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalRole`<sup>Required</sup> <a name="PrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRole"></a>

```csharp
public DataAwsAccountaccessEntitlementsFilterPrincipalRoleList PrincipalRole { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList">DataAwsAccountaccessEntitlementsFilterPrincipalRoleList</a>

---

##### `PrincipalRoleInput`<sup>Optional</sup> <a name="PrincipalRoleInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRoleInput"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRole[] PrincipalRoleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRoleList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRoleList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterPrincipalRoleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get"></a>

```csharp
private DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRole[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal"></a>

```csharp
private void PutPrincipal(IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principalInput">PrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principal"></a>

```csharp
public DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principalInput"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[] PrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRole InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get"></a>

```csharp
private DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get"></a>

```csharp
private DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter">PutIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resetIdentityCenter">ResetIdentityCenter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdentityCenter` <a name="PutIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter"></a>

```csharp
private void PutIdentityCenter(IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]

---

##### `ResetIdentityCenter` <a name="ResetIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resetIdentityCenter"></a>

```csharp
private void ResetIdentityCenter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenter">IdentityCenter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenterInput">IdentityCenterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityCenter`<sup>Required</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```csharp
public DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList IdentityCenter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList</a>

---

##### `IdentityCenterInput`<sup>Optional</sup> <a name="IdentityCenterInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenterInput"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[] IdentityCenterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>

---



