# `observabilityadminS3TableIntegration` Submodule <a name="`observabilityadminS3TableIntegration` Submodule" id="@cdktn/provider-aws.observabilityadminS3TableIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminS3TableIntegration <a name="ObservabilityadminS3TableIntegration" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration aws_observabilityadmin_s3_table_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

new observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration(scope: Construct, id: string, config: ObservabilityadminS3TableIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig">ObservabilityadminS3TableIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig">ObservabilityadminS3TableIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption"></a>

```typescript
public putEncryption(value: IResolvable | ObservabilityadminS3TableIntegrationEncryption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTimeouts"></a>

```typescript
public putTimeouts(value: ObservabilityadminS3TableIntegrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a>

---

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityadminS3TableIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityadminS3TableIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminS3TableIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.destinationTableBucketArn">destinationTableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList">ObservabilityadminS3TableIntegrationEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference">ObservabilityadminS3TableIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryptionInput">encryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `destinationTableBucketArn`<sup>Required</sup> <a name="destinationTableBucketArn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.destinationTableBucketArn"></a>

```typescript
public readonly destinationTableBucketArn: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryption"></a>

```typescript
public readonly encryption: ObservabilityadminS3TableIntegrationEncryptionList;
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList">ObservabilityadminS3TableIntegrationEncryptionList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityadminS3TableIntegrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference">ObservabilityadminS3TableIntegrationTimeoutsOutputReference</a>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: IResolvable | ObservabilityadminS3TableIntegrationEncryption[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ObservabilityadminS3TableIntegrationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminS3TableIntegrationConfig <a name="ObservabilityadminS3TableIntegrationConfig" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

const observabilityadminS3TableIntegrationConfig: observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#role_arn ObservabilityadminS3TableIntegration#role_arn}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.encryption">encryption</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>[]</code> | encryption block. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#tags ObservabilityadminS3TableIntegration#tags}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#role_arn ObservabilityadminS3TableIntegration#role_arn}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.encryption"></a>

```typescript
public readonly encryption: IResolvable | ObservabilityadminS3TableIntegrationEncryption[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>[]

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#encryption ObservabilityadminS3TableIntegration#encryption}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#region ObservabilityadminS3TableIntegration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#tags ObservabilityadminS3TableIntegration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityadminS3TableIntegrationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#timeouts ObservabilityadminS3TableIntegration#timeouts}

---

### ObservabilityadminS3TableIntegrationEncryption <a name="ObservabilityadminS3TableIntegrationEncryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

const observabilityadminS3TableIntegrationEncryption: observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#sse_algorithm ObservabilityadminS3TableIntegration#sse_algorithm}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#kms_key_arn ObservabilityadminS3TableIntegration#kms_key_arn}. |

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#sse_algorithm ObservabilityadminS3TableIntegration#sse_algorithm}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#kms_key_arn ObservabilityadminS3TableIntegration#kms_key_arn}.

---

### ObservabilityadminS3TableIntegrationTimeouts <a name="ObservabilityadminS3TableIntegrationTimeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

const observabilityadminS3TableIntegrationTimeouts: observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#create ObservabilityadminS3TableIntegration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_s3_table_integration#delete ObservabilityadminS3TableIntegration#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminS3TableIntegrationEncryptionList <a name="ObservabilityadminS3TableIntegrationEncryptionList" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

new observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.get"></a>

```typescript
public get(index: number): ObservabilityadminS3TableIntegrationEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminS3TableIntegrationEncryption[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>[]

---


### ObservabilityadminS3TableIntegrationEncryptionOutputReference <a name="ObservabilityadminS3TableIntegrationEncryptionOutputReference" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

new observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithmInput">sseAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `sseAlgorithmInput`<sup>Optional</sup> <a name="sseAlgorithmInput" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithmInput"></a>

```typescript
public readonly sseAlgorithmInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminS3TableIntegrationEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

---


### ObservabilityadminS3TableIntegrationTimeoutsOutputReference <a name="ObservabilityadminS3TableIntegrationTimeoutsOutputReference" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-aws'

new observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminS3TableIntegrationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a>

---



