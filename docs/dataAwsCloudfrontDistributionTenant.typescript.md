# `dataAwsCloudfrontDistributionTenant` Submodule <a name="`dataAwsCloudfrontDistributionTenant` Submodule" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontDistributionTenant <a name="DataAwsCloudfrontDistributionTenant" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant aws_cloudfront_distribution_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant(scope: Construct, id: string, config?: DataAwsCloudfrontDistributionTenantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig">DataAwsCloudfrontDistributionTenantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig">DataAwsCloudfrontDistributionTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isConstruct"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformElement"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformDataSource"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsCloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCloudfrontDistributionTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCloudfrontDistributionTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudfrontDistributionTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.connectionGroupId">connectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.customizations">customizations</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList">DataAwsCloudfrontDistributionTenantCustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.distributionId">distributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domains">domains</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList">DataAwsCloudfrontDistributionTenantDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.managedCertificateRequest">managedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList">DataAwsCloudfrontDistributionTenantManagedCertificateRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList">DataAwsCloudfrontDistributionTenantParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connectionGroupId`<sup>Required</sup> <a name="connectionGroupId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.connectionGroupId"></a>

```typescript
public readonly connectionGroupId: string;
```

- *Type:* string

---

##### `customizations`<sup>Required</sup> <a name="customizations" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.customizations"></a>

```typescript
public readonly customizations: DataAwsCloudfrontDistributionTenantCustomizationsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList">DataAwsCloudfrontDistributionTenantCustomizationsList</a>

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domains"></a>

```typescript
public readonly domains: DataAwsCloudfrontDistributionTenantDomainsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList">DataAwsCloudfrontDistributionTenantDomainsList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `managedCertificateRequest`<sup>Required</sup> <a name="managedCertificateRequest" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.managedCertificateRequest"></a>

```typescript
public readonly managedCertificateRequest: DataAwsCloudfrontDistributionTenantManagedCertificateRequestList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList">DataAwsCloudfrontDistributionTenantManagedCertificateRequestList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.parameters"></a>

```typescript
public readonly parameters: DataAwsCloudfrontDistributionTenantParametersList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList">DataAwsCloudfrontDistributionTenantParametersList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontDistributionTenantConfig <a name="DataAwsCloudfrontDistributionTenantConfig" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

const dataAwsCloudfrontDistributionTenantConfig: dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#arn DataAwsCloudfrontDistributionTenant#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#domain DataAwsCloudfrontDistributionTenant#domain}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#id DataAwsCloudfrontDistributionTenant#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#name DataAwsCloudfrontDistributionTenant#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#arn DataAwsCloudfrontDistributionTenant#arn}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#domain DataAwsCloudfrontDistributionTenant#domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#id DataAwsCloudfrontDistributionTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#name DataAwsCloudfrontDistributionTenant#name}.

---

### DataAwsCloudfrontDistributionTenantCustomizations <a name="DataAwsCloudfrontDistributionTenantCustomizations" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

const dataAwsCloudfrontDistributionTenantCustomizations: dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations = { ... }
```


### DataAwsCloudfrontDistributionTenantCustomizationsCertificate <a name="DataAwsCloudfrontDistributionTenantCustomizationsCertificate" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

const dataAwsCloudfrontDistributionTenantCustomizationsCertificate: dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate = { ... }
```


### DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction <a name="DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

const dataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction: dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction = { ... }
```


### DataAwsCloudfrontDistributionTenantCustomizationsWebAcl <a name="DataAwsCloudfrontDistributionTenantCustomizationsWebAcl" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

const dataAwsCloudfrontDistributionTenantCustomizationsWebAcl: dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl = { ... }
```


### DataAwsCloudfrontDistributionTenantDomains <a name="DataAwsCloudfrontDistributionTenantDomains" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

const dataAwsCloudfrontDistributionTenantDomains: dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains = { ... }
```


### DataAwsCloudfrontDistributionTenantManagedCertificateRequest <a name="DataAwsCloudfrontDistributionTenantManagedCertificateRequest" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

const dataAwsCloudfrontDistributionTenantManagedCertificateRequest: dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest = { ... }
```


### DataAwsCloudfrontDistributionTenantParameters <a name="DataAwsCloudfrontDistributionTenantParameters" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

const dataAwsCloudfrontDistributionTenantParameters: dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontDistributionTenantCustomizationsCertificateList <a name="DataAwsCloudfrontDistributionTenantCustomizationsCertificateList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate">DataAwsCloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontDistributionTenantCustomizationsCertificate;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate">DataAwsCloudfrontDistributionTenantCustomizationsCertificate</a>

---


### DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList <a name="DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType">restrictionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `restrictionType`<sup>Required</sup> <a name="restrictionType" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType"></a>

```typescript
public readonly restrictionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction</a>

---


### DataAwsCloudfrontDistributionTenantCustomizationsList <a name="DataAwsCloudfrontDistributionTenantCustomizationsList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontDistributionTenantCustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontDistributionTenantCustomizationsOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList">DataAwsCloudfrontDistributionTenantCustomizationsCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction">geoRestriction</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl">webAcl</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList">DataAwsCloudfrontDistributionTenantCustomizationsWebAclList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations">DataAwsCloudfrontDistributionTenantCustomizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.certificate"></a>

```typescript
public readonly certificate: DataAwsCloudfrontDistributionTenantCustomizationsCertificateList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList">DataAwsCloudfrontDistributionTenantCustomizationsCertificateList</a>

---

##### `geoRestriction`<sup>Required</sup> <a name="geoRestriction" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction"></a>

```typescript
public readonly geoRestriction: DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList</a>

---

##### `webAcl`<sup>Required</sup> <a name="webAcl" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl"></a>

```typescript
public readonly webAcl: DataAwsCloudfrontDistributionTenantCustomizationsWebAclList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList">DataAwsCloudfrontDistributionTenantCustomizationsWebAclList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontDistributionTenantCustomizations;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations">DataAwsCloudfrontDistributionTenantCustomizations</a>

---


### DataAwsCloudfrontDistributionTenantCustomizationsWebAclList <a name="DataAwsCloudfrontDistributionTenantCustomizationsWebAclList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl">DataAwsCloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontDistributionTenantCustomizationsWebAcl;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl">DataAwsCloudfrontDistributionTenantCustomizationsWebAcl</a>

---


### DataAwsCloudfrontDistributionTenantDomainsList <a name="DataAwsCloudfrontDistributionTenantDomainsList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontDistributionTenantDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontDistributionTenantDomainsOutputReference <a name="DataAwsCloudfrontDistributionTenantDomainsOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains">DataAwsCloudfrontDistributionTenantDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontDistributionTenantDomains;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains">DataAwsCloudfrontDistributionTenantDomains</a>

---


### DataAwsCloudfrontDistributionTenantManagedCertificateRequestList <a name="DataAwsCloudfrontDistributionTenantManagedCertificateRequestList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference <a name="DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName">primaryDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost">validationTokenHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest">DataAwsCloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateTransparencyLoggingPreference`<sup>Required</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference"></a>

```typescript
public readonly certificateTransparencyLoggingPreference: string;
```

- *Type:* string

---

##### `primaryDomainName`<sup>Required</sup> <a name="primaryDomainName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName"></a>

```typescript
public readonly primaryDomainName: string;
```

- *Type:* string

---

##### `validationTokenHost`<sup>Required</sup> <a name="validationTokenHost" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost"></a>

```typescript
public readonly validationTokenHost: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontDistributionTenantManagedCertificateRequest;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest">DataAwsCloudfrontDistributionTenantManagedCertificateRequest</a>

---


### DataAwsCloudfrontDistributionTenantParametersList <a name="DataAwsCloudfrontDistributionTenantParametersList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontDistributionTenantParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontDistributionTenantParametersOutputReference <a name="DataAwsCloudfrontDistributionTenantParametersOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontDistributionTenant } from '@cdktn/provider-aws'

new dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters">DataAwsCloudfrontDistributionTenantParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontDistributionTenantParameters;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters">DataAwsCloudfrontDistributionTenantParameters</a>

---



