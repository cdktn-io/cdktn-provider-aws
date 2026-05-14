# `dataAwsOrganizationsOrganizationalUnitChildAccounts` Submodule <a name="`dataAwsOrganizationsOrganizationalUnitChildAccounts` Submodule" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccounts <a name="DataAwsOrganizationsOrganizationalUnitChildAccounts" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/organizations_organizational_unit_child_accounts aws_organizations_organizational_unit_child_accounts}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitChildAccounts(Construct Scope, string Id, DataAwsOrganizationsOrganizationalUnitChildAccountsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig">DataAwsOrganizationsOrganizationalUnitChildAccountsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig">DataAwsOrganizationsOrganizationalUnitChildAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOrganizationsOrganizationalUnitChildAccounts resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOrganizationsOrganizationalUnitChildAccounts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOrganizationsOrganizationalUnitChildAccounts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOrganizationsOrganizationalUnitChildAccounts.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOrganizationsOrganizationalUnitChildAccounts.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsOrganizationsOrganizationalUnitChildAccounts resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOrganizationsOrganizationalUnitChildAccounts to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOrganizationsOrganizationalUnitChildAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/organizations_organizational_unit_child_accounts#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOrganizationsOrganizationalUnitChildAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.accounts">Accounts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList">DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.accounts"></a>

```csharp
public DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList Accounts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList">DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts {

};
```


### DataAwsOrganizationsOrganizationalUnitChildAccountsConfig <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsConfig" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitChildAccountsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ParentId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.parentId">ParentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.parentId"></a>

```csharp
public string ParentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get"></a>

```csharp
private DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.joinedMethod">JoinedMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.joinedTimestamp">JoinedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts">DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JoinedMethod`<sup>Required</sup> <a name="JoinedMethod" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.joinedMethod"></a>

```csharp
public string JoinedMethod { get; }
```

- *Type:* string

---

##### `JoinedTimestamp`<sup>Required</sup> <a name="JoinedTimestamp" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.joinedTimestamp"></a>

```csharp
public string JoinedTimestamp { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.internalValue"></a>

```csharp
public DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts">DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts</a>

---



