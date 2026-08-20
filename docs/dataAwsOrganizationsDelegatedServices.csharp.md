# `dataAwsOrganizationsDelegatedServices` Submodule <a name="`dataAwsOrganizationsDelegatedServices` Submodule" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsDelegatedServices <a name="DataAwsOrganizationsDelegatedServices" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/organizations_delegated_services aws_organizations_delegated_services}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOrganizationsDelegatedServices(Construct Scope, string Id, DataAwsOrganizationsDelegatedServicesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig">DataAwsOrganizationsDelegatedServicesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig">DataAwsOrganizationsDelegatedServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOrganizationsDelegatedServices resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOrganizationsDelegatedServices.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOrganizationsDelegatedServices.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOrganizationsDelegatedServices.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOrganizationsDelegatedServices.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsOrganizationsDelegatedServices resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOrganizationsDelegatedServices to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOrganizationsDelegatedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/organizations_delegated_services#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOrganizationsDelegatedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.delegatedServices">DelegatedServices</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList">DataAwsOrganizationsDelegatedServicesDelegatedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DelegatedServices`<sup>Required</sup> <a name="DelegatedServices" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.delegatedServices"></a>

```csharp
public DataAwsOrganizationsDelegatedServicesDelegatedServicesList DelegatedServices { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList">DataAwsOrganizationsDelegatedServicesDelegatedServicesList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsDelegatedServicesConfig <a name="DataAwsOrganizationsDelegatedServicesConfig" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOrganizationsDelegatedServicesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsOrganizationsDelegatedServicesDelegatedServices <a name="DataAwsOrganizationsDelegatedServicesDelegatedServices" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOrganizationsDelegatedServicesDelegatedServices {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsDelegatedServicesDelegatedServicesList <a name="DataAwsOrganizationsDelegatedServicesDelegatedServicesList" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOrganizationsDelegatedServicesDelegatedServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.get"></a>

```csharp
private DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference <a name="DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.delegationEnabledDate">DelegationEnabledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.servicePrincipal">ServicePrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices">DataAwsOrganizationsDelegatedServicesDelegatedServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelegationEnabledDate`<sup>Required</sup> <a name="DelegationEnabledDate" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.delegationEnabledDate"></a>

```csharp
public string DelegationEnabledDate { get; }
```

- *Type:* string

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.servicePrincipal"></a>

```csharp
public string ServicePrincipal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.internalValue"></a>

```csharp
public DataAwsOrganizationsDelegatedServicesDelegatedServices InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices">DataAwsOrganizationsDelegatedServicesDelegatedServices</a>

---



