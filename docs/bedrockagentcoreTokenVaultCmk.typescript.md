# `bedrockagentcoreTokenVaultCmk` Submodule <a name="`bedrockagentcoreTokenVaultCmk` Submodule" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreTokenVaultCmk <a name="BedrockagentcoreTokenVaultCmk" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk aws_bedrockagentcore_token_vault_cmk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer"></a>

```typescript
import { bedrockagentcoreTokenVaultCmk } from '@cdktf/provider-aws'

new bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk(scope: Construct, id: string, config?: BedrockagentcoreTokenVaultCmkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig">BedrockagentcoreTokenVaultCmkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig">BedrockagentcoreTokenVaultCmkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.putKmsConfiguration">putKmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetKmsConfiguration">resetKmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetTokenVaultId">resetTokenVaultId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKmsConfiguration` <a name="putKmsConfiguration" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.putKmsConfiguration"></a>

```typescript
public putKmsConfiguration(value: IResolvable | BedrockagentcoreTokenVaultCmkKmsConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.putKmsConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]

---

##### `resetKmsConfiguration` <a name="resetKmsConfiguration" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetKmsConfiguration"></a>

```typescript
public resetKmsConfiguration(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTokenVaultId` <a name="resetTokenVaultId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetTokenVaultId"></a>

```typescript
public resetTokenVaultId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreTokenVaultCmk resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isConstruct"></a>

```typescript
import { bedrockagentcoreTokenVaultCmk } from '@cdktf/provider-aws'

bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformElement"></a>

```typescript
import { bedrockagentcoreTokenVaultCmk } from '@cdktf/provider-aws'

bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformResource"></a>

```typescript
import { bedrockagentcoreTokenVaultCmk } from '@cdktf/provider-aws'

bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreTokenVaultCmk } from '@cdktf/provider-aws'

bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BedrockagentcoreTokenVaultCmk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreTokenVaultCmk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreTokenVaultCmk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreTokenVaultCmk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.kmsConfiguration">kmsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList">BedrockagentcoreTokenVaultCmkKmsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.kmsConfigurationInput">kmsConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tokenVaultIdInput">tokenVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tokenVaultId">tokenVaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kmsConfiguration`<sup>Required</sup> <a name="kmsConfiguration" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.kmsConfiguration"></a>

```typescript
public readonly kmsConfiguration: BedrockagentcoreTokenVaultCmkKmsConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList">BedrockagentcoreTokenVaultCmkKmsConfigurationList</a>

---

##### `kmsConfigurationInput`<sup>Optional</sup> <a name="kmsConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.kmsConfigurationInput"></a>

```typescript
public readonly kmsConfigurationInput: IResolvable | BedrockagentcoreTokenVaultCmkKmsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tokenVaultIdInput`<sup>Optional</sup> <a name="tokenVaultIdInput" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tokenVaultIdInput"></a>

```typescript
public readonly tokenVaultIdInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tokenVaultId`<sup>Required</sup> <a name="tokenVaultId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tokenVaultId"></a>

```typescript
public readonly tokenVaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreTokenVaultCmkConfig <a name="BedrockagentcoreTokenVaultCmkConfig" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.Initializer"></a>

```typescript
import { bedrockagentcoreTokenVaultCmk } from '@cdktf/provider-aws'

const bedrockagentcoreTokenVaultCmkConfig: bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.kmsConfiguration">kmsConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]</code> | kms_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.tokenVaultId">tokenVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#token_vault_id BedrockagentcoreTokenVaultCmk#token_vault_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kmsConfiguration`<sup>Optional</sup> <a name="kmsConfiguration" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.kmsConfiguration"></a>

```typescript
public readonly kmsConfiguration: IResolvable | BedrockagentcoreTokenVaultCmkKmsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]

kms_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#kms_configuration BedrockagentcoreTokenVaultCmk#kms_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#region BedrockagentcoreTokenVaultCmk#region}

---

##### `tokenVaultId`<sup>Optional</sup> <a name="tokenVaultId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.tokenVaultId"></a>

```typescript
public readonly tokenVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#token_vault_id BedrockagentcoreTokenVaultCmk#token_vault_id}.

---

### BedrockagentcoreTokenVaultCmkKmsConfiguration <a name="BedrockagentcoreTokenVaultCmkKmsConfiguration" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreTokenVaultCmk } from '@cdktf/provider-aws'

const bedrockagentcoreTokenVaultCmkKmsConfiguration: bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration.property.keyType">keyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#key_type BedrockagentcoreTokenVaultCmk#key_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#kms_key_arn BedrockagentcoreTokenVaultCmk#kms_key_arn}. |

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#key_type BedrockagentcoreTokenVaultCmk#key_type}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#kms_key_arn BedrockagentcoreTokenVaultCmk#kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreTokenVaultCmkKmsConfigurationList <a name="BedrockagentcoreTokenVaultCmkKmsConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreTokenVaultCmk } from '@cdktf/provider-aws'

new bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreTokenVaultCmkKmsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]

---


### BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference <a name="BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreTokenVaultCmk } from '@cdktf/provider-aws'

new bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreTokenVaultCmkKmsConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>

---



